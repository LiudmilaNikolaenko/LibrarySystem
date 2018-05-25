import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { 
  NavigationComponent,
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

import { ApiRequestService, DataService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BooksComponent,
    BooksSearchComponent,
    BookComponent,
    BookAddEditComponent,
    BookDeleteComponent, 
    StudentsComponent,
    StudentComponent,
    StudentAddEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    ApiRequestService, 
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
