import { TestBed, async } from '@angular/core/testing';
import { BookDeleteComponent } from './book-delete.component';

describe('BookDeleteComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDeleteComponent
      ],
    }).compileComponents();
  }));
  it('should create the book-delete', async(() => {
    const fixture = TestBed.createComponent(BookDeleteComponent);
    const bookDelete = fixture.debugElement.componentInstance;
    expect(bookDelete).toBeTruthy();
  }));
});