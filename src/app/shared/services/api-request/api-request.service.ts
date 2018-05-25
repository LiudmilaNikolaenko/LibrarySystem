import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiRequestService {
  private serverUrl = 'http://server.localhostsro.sk:8282/';

  constructor(private http: HttpClient) { }
  
  public getArrRequest(url:string): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get<any[]>(this.serverUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public searchRequest(url:string, searchExp: string): Observable<any[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: new HttpParams().set('searchExp', searchExp)
    };

    return this.http.get<any[]>(this.serverUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }

  public getRequest(url:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get<any>(this.serverUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public addRequest(url:string, body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(this.serverUrl + url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateRequest(url:string, body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put<any>(this.serverUrl + url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteRequest(url:string): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.delete(this.serverUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');

  }
}

