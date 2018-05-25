import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, Student, Checkout } from '../../shared/interfaces';
import { ApiRequestService } from '../../shared/services';

@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  student: any = {
    uuid: '',
    email: '',
    gender: '',
    checkouts: [],
    given_name: '',
    family_name: ''
  };
  books: any[] = [];
  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private apiService: ApiRequestService) { }

  ngOnInit() {
    let uuid: string = this.activatedRoute.snapshot.paramMap.get('uuid');
    
    this.apiService.getRequest('student/' + uuid).subscribe(
      (student: Student) => {
        this.student = student;
        let returnCount: number = 0;
        this.student.checkouts.forEach(
          (checkout: Checkout) => {
            if (checkout.return_date) returnCount++;
            this.apiService.getRequest('book/' + checkout.book_id).subscribe(
              (book: Book) => this.books.push({
                ...book, 
                checkout_date: checkout.checkout_date ? new Date(checkout.checkout_date).toDateString() : '', 
                return_date: checkout.return_date ? new Date(checkout.return_date).toDateString() : '',
                valid_until: checkout.valid_until ? new Date(checkout.valid_until).toDateString() : ''
              }),
              error => this.errorMessage = error
            );
          }
        )
        this.student.returnCount = returnCount;
      },
      error => this.errorMessage = error
    );
  }

  public bookInfo(id: number) {
    this.router.navigate(['students', this.student.uuid, id]);
  }

  public goBack() {
    this.router.navigate(['students']);
  }

  public editStudent() {
    this.router.navigate(['students', 'edit', this.student.uuid]);
  }

  public deleteStudent() {
    this.router.navigate(['students', 'delete', this.student.uuid]);
  }

}
