import { TestBed, async } from '@angular/core/testing';
import { BooksSearchComponent } from './books-search.component';

describe('BooksSearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksSearchComponent
      ],
    }).compileComponents();
  }));
  it('should create the books-search', async(() => {
    const fixture = TestBed.createComponent(BooksSearchComponent);
    const booksSearch = fixture.debugElement.componentInstance;
    expect(booksSearch).toBeTruthy();
  }));
});