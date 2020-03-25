import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TransitionCheckState } from '@angular/material/checkbox';

@Component({
  selector: 'app-combined-data-view',
  templateUrl: './combined-data-view.component.html',
  styleUrls: ['./combined-data-view.component.scss']
})
export class CombinedDataViewComponent implements OnInit {

  constructor(private userService: UsersService) { }

  visitCounter;
  userCounter;

  ngOnInit(): void {
    this.userService.getAllSites()
      .subscribe(res=> {
        this.visitCounter = res;
      }, err => {
        console.log(err);
      })
    this.userService.getNumberOfUsers()
      .subscribe(res =>{
        this.userCounter = res.data.total;
      }, err=>{
        console.log(err);
      })
  }
}
