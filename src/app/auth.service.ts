import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials): Observable<any> {
    return this.http.post('https://activity-observer.herokuapp.com/api/auth',credentials)
      .pipe(catchError(this.handleError));
      
  }

  isLoggedIn(): boolean {
    // let jwt = new JwtHelper();
    // let token = localStorage.getItem('token');

    // if(!token) return false;

    // let isExpired = jwt.isTokenExpired(token);
    // return !isExpired;
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occured: ',error.error.message);
    } else {
      console.log(error);
    }
    return throwError("lol");
  }
}
