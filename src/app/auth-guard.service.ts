import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate() {
    if(this.auth.isLoggedIn()) return true;
  }

  constructor(private auth: AuthService) { }
}
