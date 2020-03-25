import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  url = 'https://activity-observer.herokuapp.com/api';

  getUsers(limit,page):Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.url}/users?limit=${limit}&page=${page}`, opts);
  }

  getSingleUserData(id):Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.url}/sites/${id}`,opts);
  }

  getNumberOfUsers():Observable<any> {
    return this.getUsers(0,0);
  }

  getAllSites():Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.url}/sites`,opts);
  }
}
