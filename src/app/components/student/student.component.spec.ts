import { TestBed, async } from '@angular/core/testing';
import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentComponent
      ],
    }).compileComponents();
  }));
  it('should create the student', async(() => {
    const fixture = TestBed.createComponent(StudentComponent);
    const student = fixture.debugElement.componentInstance;
    expect(student).toBeTruthy();
  }));
});