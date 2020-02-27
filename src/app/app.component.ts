import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kpz-activity-observer-web';
  currentView = "combined";

  isLoggedIn: boolean = false;

  viewChanged($event) {
    if($event==='logout') this.isLoggedIn = false;
    this.currentView = $event;
  }

  logIn(){
    this.isLoggedIn = true;
  }
}
