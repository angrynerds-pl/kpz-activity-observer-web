import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user-counter',
  templateUrl: './user-counter.component.html',
  styleUrls: ['./user-counter.component.scss']
})
export class UserCounterComponent implements OnInit {

  @Input('nrOfUsers') nrOfUsers;

  constructor() { }


  ngOnInit(): void {
  }

}
