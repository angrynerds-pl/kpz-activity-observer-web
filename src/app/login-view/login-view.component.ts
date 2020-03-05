import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  ngOnInit(): void {
    if(localStorage.getItem('token') || sessionStorage.getItem('token')) {
      this.router.navigate(['/main/users']);
    }
  }


  title: string = "Activity Observer";
  constructor(private router: Router, private auth: AuthService) { }

  private email: string;
  private password: string;
  rememberMeIsChecked = false;
  loginError = false;
  errorMessage = '';

  onLogInClicked() {
    if(!this.password || !this.email) {
      this.errorMessage = 'Neither field can be empty';
      this.loginError = true;
      return;
    }
    const credentials = { email: this.email, password: this.password };
    this.auth.login(credentials)
      .subscribe(res => {
          const isAdmin = this.auth.checkPermissions(res);
          if(!isAdmin) {
            this.errorMessage = 'Insufficient permissions';
            this.loginError = true;
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
            this.errorMessage = 'Server unreachable. Please try again later.';
          } else {
            this.errorMessage = 'Invalid email and/or password';
          }
          this.loginError = true;
        }
      );
  }

  setEmail($event) {
    this.email = $event.target.value;
  }

  setPassword($event) {
    this.password = $event.target.value;
  }

  rememberMe() {
    this.rememberMeIsChecked = !this.rememberMeIsChecked;
  }
}
