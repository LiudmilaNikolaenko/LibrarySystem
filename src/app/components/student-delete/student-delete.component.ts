import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, Checkout } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'student-delete',
  templateUrl: 'student-delete.component.html'
})
export class StudentDeleteComponent implements OnInit {
  student: Student = {
    uuid: '',
    email: '',
    gender: '',
    checkouts: [],
    given_name: '',
    family_name: ''
  };
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiRequestService) { }

  ngOnInit() {
    let uuid: string = this.activatedRoute.snapshot.paramMap.get('uuid');
    
    if (uuid) { 
      this.apiService.getRequest('student/' + uuid)
        .subscribe(
          (student: Student) => this.student = student,
          error => this.errorMessage = error
        );
    }
  }

  deleteStudent() {
    this.apiService.deleteRequest('student/' + this.student.uuid)
      .subscribe(
        () => this.goBack(),
        error => this.errorMessage = error
      );
  }

  goBack() {
    this.router.navigate(['students']);
  }

}
