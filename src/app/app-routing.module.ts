import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  BooksComponent,
  BooksSearchComponent,
  BookComponent,
  BookAddEditComponent,
  BookDeleteComponent, 
  StudentsComponent,
  StudentComponent,
  StudentAddEditComponent,
  StudentDeleteComponent
} from './components';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/search', component: BooksSearchComponent },
  { path: 'books/search/:id', component: BookComponent },
  { path: 'books/new', component: BookAddEditComponent },
  { path: 'books/edit/:id', component: BookAddEditComponent },
  { path: 'books/delete/:id', component: BookDeleteComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/new', component: StudentAddEditComponent },
  { path: 'students/edit/:uuid', component: StudentAddEditComponent },
  { path: 'students/delete/:uuid', component: StudentDeleteComponent },
  { path: 'students/:uuid', component: StudentComponent },
  { path: 'students/:uuid/:id', component: BookComponent },
  { path: '**', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }