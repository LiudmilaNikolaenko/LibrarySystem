import { TestBed, async } from '@angular/core/testing';
import { BookAddEditComponent } from './book-add-edit.component';

describe('BookAddEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookAddEditComponent
      ],
    }).compileComponents();
  }));
  it('should create the book-add-edit', async(() => {
    const fixture = TestBed.createComponent(BookAddEditComponent);
    const bookAddEdit = fixture.debugElement.componentInstance;
    expect(bookAddEdit).toBeTruthy();
  }));
});