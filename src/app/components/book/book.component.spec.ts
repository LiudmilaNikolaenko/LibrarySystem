import { TestBed, async } from '@angular/core/testing';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookComponent
      ],
    }).compileComponents();
  }));
  it('should create the book', async(() => {
    const fixture = TestBed.createComponent(BookComponent);
    const book = fixture.debugElement.componentInstance;
    expect(book).toBeTruthy();
  }));
});