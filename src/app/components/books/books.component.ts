import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../shared/interfaces';
import { ApiRequestService, DataService } from '../../shared/services';

@Component({
  selector: 'books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private apiService: ApiRequestService,
    private dataService: DataService) { }

  ngOnInit() {
    this.apiService.getArrRequest('book/')
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          let maxId = 0;
          this.books.forEach(
            (book: Book) => { 
              if (book.id > maxId) maxId = book.id;
            }
          );
          this.dataService.setMaxBookId(maxId);
        },
        error => this.errorMessage = error
      );
  }

  public bookInfo(id: number) {
    this.router.navigate(['books', id]);
  }

  public addBook() {
    this.router.navigate(['books', 'new']);
  }

  public searchBooks() {
    this.router.navigate(['books', 'search']);
  }

}
