import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  title: string = "Activity Observer";
  constructor(private router: Router, private auth: AuthService) { }

  private email: string;
  private password: string;
  loginError = false;

  onLogInClicked() {
    if(!this.password || !this.email) return;
    const credentials = { email: this.email, password: this.password };
    this.auth.login(credentials)
      .subscribe(res => {
          
          localStorage.setItem('token',res.data.accessToken);
          console.log(res.data.accessToken);
          this.router.navigate(['/main/users']);
        },
        err => {
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

}
