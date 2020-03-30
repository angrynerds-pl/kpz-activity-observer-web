import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TransitionCheckState } from '@angular/material/checkbox';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-combined-data-view',
  templateUrl: './combined-data-view.component.html',
  styleUrls: ['./combined-data-view.component.scss']
})
export class CombinedDataViewComponent implements OnInit {

  constructor(private userService: UsersService, private auth: AuthService) { }

  timePercentage;
  visitCounter;
  userCounter;

  ngOnInit(): void {
    this.auth.logoutIfExpired();
    this.userService.getAllSites()
      .subscribe(res=> {
        this.updateGraphs(res);
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

  private updateGraphs(res) {
    const visitCounterTemp = [];
    const timePercentageTemp = [];
    res.data.forEach(ele => {
      visitCounterTemp.push({'name':ele.url, 'value':ele.totalVisits});
      timePercentageTemp.push({'name':ele.url, 'value':ele.totalTime});
    })
    this.visitCounter = visitCounterTemp;
    this.timePercentage = timePercentageTemp;
  }
}

