import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'book-delete',
  templateUrl: 'book-delete.component.html'
})
export class BookDeleteComponent implements OnInit {
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
    if (id) { 
      this.apiService.getRequest('book/' + id)
        .subscribe(
          (book: Book) => this.book = book,
          error => this.errorMessage = error
        );
    }
  }

  deleteBook() {
    this.apiService.deleteRequest('book/' + this.book.id)
      .subscribe(
        () => this.goBack(),
        error => this.errorMessage = error
      );
  }

  goBack() {
    this.router.navigate(['books']);
  }

}
