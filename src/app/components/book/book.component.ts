import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
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
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private apiService: ApiRequestService) { }

  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.apiService.getRequest('book/' + id).subscribe(
      (book: Book) => this.book = book,
      error => this.errorMessage = error
    );
  }

  public goBack() {
    let urlArr = this.activatedRoute.snapshot.url;
    urlArr.pop();
    let url: string = urlArr.join('/');
    this.router.navigate([url]);
  }

  public editBook() {
    this.router.navigate(['books', 'edit', this.book.id]);
  }

  public deleteBook() {
    this.router.navigate(['books', 'delete', this.book.id]);
  }

}
