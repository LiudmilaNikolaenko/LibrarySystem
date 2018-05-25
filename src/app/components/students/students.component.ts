import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Student, Checkout } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private apiService: ApiRequestService) { }

  ngOnInit() {
    this.apiService.getArrRequest('student/')
      .subscribe(
        (students: Student[]) => {
          this.students = students;
          this.students.map(
            (student: any) => {
              let returnCount: number = 0;
              student.checkouts.forEach(
                (checkout: Checkout) => {
                  if (checkout.return_date) returnCount++;
                })
              student.returnCount = returnCount;
              return student;
            }
          )
        },
        error => this.errorMessage = error
      );
  }

  public studentInfo(uuid: number) {
    this.router.navigate(['students', uuid]);
  }

  public addStudent() {
    this.router.navigate(['students', 'new']);
  }

}
