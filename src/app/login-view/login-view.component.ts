import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  ngOnInit(): void {
    const token = this.auth.getToken();
    if(token != null) {
      const jwt = new JwtHelperService();
      if(!jwt.isTokenExpired(token)) {
        this.router.navigate(['/main/users']);
      } else {
        this.auth.logout();
      }
    }
  }

  form = new FormGroup({
    email: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  title: string = "Activity Observer";
  constructor(private router: Router, private auth: AuthService) { }

  rememberMeIsChecked = false;

  onLogInClicked() {
    const credentials = { email: this.form.get('email').value, password: this.form.get('password').value };
    this.auth.login(credentials)
      .subscribe(res => {
          const isAdmin = this.auth.checkPermissions(res);
          if(!isAdmin) {
            this.form.setErrors({
              insPerm: true
            })
            return;
          }
          if(this.rememberMeIsChecked) {
            localStorage.setItem('token',res.data.accessToken);
          } else {
            sessionStorage.setItem('token',res.data.accessToken);
          }
          this.router.navigate(['/main/users']);
        },
        err => {
          if(err.status==404) {
            this.form.setErrors({
              serverUna: true
            })
          } else {
            this.form.setErrors({
              invalidCred: true
            })
          }
        }
      );
  }
  rememberMe() {
    this.rememberMeIsChecked = !this.rememberMeIsChecked;
  }
}
