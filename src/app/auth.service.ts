import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials): Observable<any> {
    return this.http.post('https://activity-observer.herokuapp.com/api/auth',credentials);
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

  getToken() {
    let token = localStorage.getItem('token');
    if(!token) {
      token = sessionStorage.getItem('token');
      if(!token) return null;
    }
    return token;
  }

  refreshToken() {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.getToken()}`
      })
    }
    return this.http.get('https://activity-observer.herokuapp.com/api/auth',opts);
  }

  logoutIfExpired() {
    const jwt = new JwtHelperService();
    if(jwt.isTokenExpired(this.getToken())){
      this.logout();
    } else {
      let expirationDate: any = jwt.getTokenExpirationDate(this.getToken());
      expirationDate = Date.UTC(expirationDate.getUTCFullYear(),expirationDate.getUTCMonth(),expirationDate.getUTCDate(),expirationDate.getUTCHours(),expirationDate.getUTCMinutes(),expirationDate.getUTCSeconds(),expirationDate.getUTCMilliseconds());
      if(expirationDate-Date.now() < 3600000) {
        this.refreshToken()
          .subscribe((res:any)=>{
            if(localStorage.getItem('token')){
              localStorage.setItem('token', res.data.accessToken);
            } else {
              sessionStorage.setItem('token', res.data.accessToken);
            }
          },err=> {
            console.log(err);
          })
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
