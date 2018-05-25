import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../shared/interfaces';
import { ApiRequestService, DataService } from '../../shared/services';

@Component({
  selector: 'books-search',
  templateUrl: './books-search.component.html'
})
export class BooksSearchComponent implements OnInit {
  bookSearchExp: string = '';
  books: Book[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private apiService: ApiRequestService,
    private dataService: DataService) { }

  ngOnInit() {
    this.bookSearchExp = this.dataService.getBookSearchExp();
    
    if (this.bookSearchExp) {
      this.apiService.searchRequest('book/search/', this.bookSearchExp).subscribe(
        (books: Book[]) => this.books = books,
        error => this.errorMessage += error
      )
    }
  }

  public onValueChange() {
    this.dataService.setBookSearchExp(this.bookSearchExp);
    if (this.bookSearchExp) {
      this.apiService.searchRequest('book/search/', this.bookSearchExp).subscribe(
        (books: Book[]) => this.books = books,
        error => this.errorMessage += error
      );
    }
  }

  public bookInfo(id: number) {
    this.router.navigate(['books', 'search', id]);
  }

}
