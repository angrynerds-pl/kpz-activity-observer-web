import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-single-data-view',
  templateUrl: './single-data-view.component.html',
  styleUrls: ['./single-data-view.component.scss']
})
export class SingleDataViewComponent implements OnInit {

  constructor(private auth: AuthService) { }
  selectedUser;

  ngOnInit(): void {
    this.auth.logoutIfExpired();
  }

  select($event) {
    this.selectedUser = $event;
  }

}
