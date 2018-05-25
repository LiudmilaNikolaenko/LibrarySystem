import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student, Checkout } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'student-add-edit',
  templateUrl: './student-add-edit.component.html'
})
export class StudentAddEditComponent implements OnInit {
  student: Student = {
    uuid: '',
    email: '',
    gender: '',
    checkouts: [],
    given_name: '',
    family_name: ''
  };
  title: string = '';
  studentForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiRequestService) { }

  ngOnInit() {
    this.buildForm();
    this.getData();
  }

  public checkError(element: string, errorType: string) {
    return this.studentForm.get(element).hasError(errorType) &&
      this.studentForm.get(element).touched
  }

  public onSubmit() {
    this.student.family_name = this.studentForm.value.family_name;
    this.student.given_name = this.studentForm.value.given_name;
    this.student.gender = this.studentForm.value.gender;
    this.student.email = this.studentForm.value.email;

    if (this.student.uuid) {
      this.apiService.updateRequest('student/' + this.student.uuid, this.student)
        .subscribe(
          () => this.goBack(),
          error => this.errorMessage = error
        );
    } else {
      this.student.uuid = Date.now().toString();
      this.student.checkouts = [];
      this.apiService.addRequest('student/', this.student)
        .subscribe(
          (student: Student) => {
            this.student.uuid = student.uuid;
            this.goBack()
          },
          error => this.errorMessage += error
        );
    }
  }

  public goBack() {
    if (this.student.uuid) {
      this.router.navigate(['students', this.student.uuid]);
    } else {  
      this.router.navigate(['students']);
    };
  }

  private getData() {
    let uuid: string = this.activatedRoute.snapshot.paramMap.get('uuid');
    
    if (uuid) {
      this.title = 'Edit Student';
      this.apiService.getRequest('student/' + uuid)
        .subscribe(
          (student: Student) => {
            this.student = student;
            this.studentForm.patchValue(this.student);
          },
          error => this.errorMessage = error
        );
    } else {
      this.title = 'Add New Student';
    }
  }

  private buildForm() {
    this.studentForm = this.fb.group({
      family_name: ['', Validators.required],
      given_name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-а-яА-ЯЁё]+(?:\.[a-zA-Z0-9-а-яА-ЯЁё]+)*$')
      ]]
    });  
  }

}
