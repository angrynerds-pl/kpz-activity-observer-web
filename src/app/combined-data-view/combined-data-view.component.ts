import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-combined-data-view',
  templateUrl: './combined-data-view.component.html',
  styleUrls: ['./combined-data-view.component.scss']
})
export class CombinedDataViewComponent implements OnInit {

  constructor(private userService: UsersService) { }

  visitCounter;

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(res=> {
        this.visitCounter = res;
      }, err => {
        console.log(err);
      })
  }
}
