import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials): Observable<any> {
    return this.http.post('https://activity-observer.herokuapp.com/api/auth',credentials)
      .pipe(catchError(this.handleError));
  }

  checkPermissions(res):boolean {
    const jwt = new JwtHelperService();
    return jwt.decodeToken(res.data.accessToken).admin;
  }

  isLoggedIn(): boolean {
    const jwt = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token) {
      token = sessionStorage.getItem('token');
      if(!token) return false;
    }
    return !jwt.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occured: ',error.error.message);
    } else {
      console.log(error);
    }
    return throwError("error");
  }
}
