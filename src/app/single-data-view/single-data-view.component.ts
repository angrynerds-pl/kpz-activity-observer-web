import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-data-view',
  templateUrl: './single-data-view.component.html',
  styleUrls: ['./single-data-view.component.scss']
})
export class SingleDataViewComponent implements OnInit {

  constructor() { }
  selectedUser;

  ngOnInit(): void {}

  select($event) {
    this.selectedUser = $event;
  }

}
