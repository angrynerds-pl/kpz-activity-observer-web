import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  userListIsActive: boolean = true;
  singleDataIsActive: boolean = false;
  combinedDataIsActive: boolean = false;
  @Output() currentView = new EventEmitter();

  constructor() { }

  onSingleDataClick() {
    this.singleDataIsActive = true;
    this.userListIsActive = false;
    this.combinedDataIsActive = false;
    this.currentView.emit("single");
  }

  onCombinedDataClick() {
    this.singleDataIsActive = false;
    this.userListIsActive = false;
    this.combinedDataIsActive = true;
    this.currentView.emit("combined");
  }

  onLogoutClick() {
    this.currentView.emit("logout");
  }

  onUserListClick() {
    this.singleDataIsActive = false;
    this.userListIsActive = true;
    this.combinedDataIsActive = false;
    this.currentView.emit("users")
  }
}
