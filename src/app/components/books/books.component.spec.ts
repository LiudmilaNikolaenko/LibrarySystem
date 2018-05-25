import { TestBed, async } from '@angular/core/testing';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksComponent
      ],
    }).compileComponents();
  }));
  it('should create the books', async(() => {
    const fixture = TestBed.createComponent(BooksComponent);
    const books = fixture.debugElement.componentInstance;
    expect(books).toBeTruthy();
  }));
});