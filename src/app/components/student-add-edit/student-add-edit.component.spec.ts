import { TestBed, async } from '@angular/core/testing';
import { StudentAddEditComponent } from './student-add-edit.component';

describe('StudentAddEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentAddEditComponent
      ],
    }).compileComponents();
  }));
  it('should create the student-add-edit', async(() => {
    const fixture = TestBed.createComponent(StudentAddEditComponent);
    const studentAddEdit = fixture.debugElement.componentInstance;
    expect(studentAddEdit).toBeTruthy();
  }));
});