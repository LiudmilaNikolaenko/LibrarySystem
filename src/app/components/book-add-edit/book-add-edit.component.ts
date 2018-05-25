import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../../shared/interfaces';
import { ApiRequestService, DataService } from '../../shared/services';

@Component({
  selector: 'book-add-edit',
  templateUrl: './book-add-edit.component.html'
})
export class BookAddEditComponent implements OnInit {
  book: Book = {
    id: 0,
    author: '',
    title: '',
    language: '',
    publisher: '',
    release_date: 0,
    isbn: '',
    pages_count: 0,
    count: 0,
    actual_count: 0
  };
  title: string = '';
  bookForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiRequestService,
    private dataService: DataService) { }

  ngOnInit() {
    this.buildForm();
    this.getData();
  }

  public checkError(element: string, errorType: string) {
    return this.bookForm.get(element).hasError(errorType) &&
      this.bookForm.get(element).touched
  }

  public onSubmit() {
    this.book.author = this.bookForm.value.author;
    this.book.title = this.bookForm.value.title;
    this.book.language = this.bookForm.value.language;
    this.book.publisher = this.bookForm.value.publisher;
    this.book.release_date = this.bookForm.value.release_date;
    this.book.isbn = this.bookForm.value.isbn;
    this.book.pages_count = this.bookForm.value.pages_count;
    let dif: number = this.book.count - this.book.actual_count;
    this.book.count = (this.bookForm.value.count - dif >= 0) ? this.bookForm.value.count : dif;
    this.book.actual_count = this.book.count - dif;

    if (this.book.id) {
      this.apiService.updateRequest('book/' + this.book.id, this.book)
        .subscribe(
          () => this.goBack(),
          error => this.errorMessage = error
        );
    } else {
      this.book.id = this.dataService.getMaxBookId() + 1;
      this.apiService.addRequest('book/', this.book)
        .subscribe(
          () => {
            this.dataService.setMaxBookId(this.book.id);
            this.goBack();
          },
          error => this.errorMessage += error
        );
    }
  }

  public goBack() {
    if (this.book.id) {
      this.router.navigate(['books', this.book.id]);
    } else {  
      this.router.navigate(['books']);
    };
  }

  private getData() {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.title = 'Edit Book';
      this.apiService.getRequest('book/' + id)
        .subscribe(
          (book: Book) => {
            this.book = book;
            this.bookForm.patchValue(this.book);
          },
          error => this.errorMessage = error
        );
    } else {
      this.title = 'Add New Book';
    }
  }

  private buildForm() {
    this.bookForm = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      language: ['', Validators.required],
      publisher: ['', Validators.required],
      release_date: [0, [
        Validators.required,
        Validators.pattern('[0-9]{4}')
      ]],
      isbn: ['', [
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ]],
      pages_count: [0, Validators.required],
      count: [0, Validators.required]
    });  
  }

}
