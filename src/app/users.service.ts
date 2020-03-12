import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  path = 'https://activity-observer.herokuapp.com/api';

  getUsers():Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.path}/users`, opts);
  }

  getSingleUserData(id):Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.path}/sites/${id}`,opts);
  }
}
