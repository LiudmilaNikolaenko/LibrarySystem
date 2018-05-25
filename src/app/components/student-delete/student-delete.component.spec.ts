import { TestBed, async } from '@angular/core/testing';
import { StudentDeleteComponent } from './student-delete.component';

describe('StudentDeleteComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentDeleteComponent
      ],
    }).compileComponents();
  }));
  it('should create the student-delete', async(() => {
    const fixture = TestBed.createComponent(StudentDeleteComponent);
    const studentDelete = fixture.debugElement.componentInstance;
    expect(studentDelete).toBeTruthy();
  }));
});