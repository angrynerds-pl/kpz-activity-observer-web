import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  title: string = "Activity Observer";
  @Output() logIn = new EventEmitter();
  constructor() { }

  onLogInClicked() {
    this.logIn.emit();
  }
}
