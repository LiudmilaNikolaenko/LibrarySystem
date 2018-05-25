import { TestBed, async } from '@angular/core/testing';
import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentsComponent
      ],
    }).compileComponents();
  }));
  it('should create the students', async(() => {
    const fixture = TestBed.createComponent(StudentsComponent);
    const students = fixture.debugElement.componentInstance;
    expect(students).toBeTruthy();
  }));
});