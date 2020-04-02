import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from '../user-list/user-list.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user-data',
  templateUrl: './single-user-data.component.html',
  styleUrls: ['./single-user-data.component.scss']
})
export class SingleUserDataComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  name;
  surname;
  
  visitCounter;
  timePercentage;

  @Input() selectedUser: User;
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.selectedUser.currentValue!=null){
      const user:User = changes.selectedUser.currentValue;
      this.name = user.name;
      this.surname = user.surname;
      this.userService.getSingleUserData(user._id)
        .subscribe(res =>{
          this.updateGraphs(res.data);
        },
        err => {
          console.log(err);
        });
    }
  }

  private updateGraphs(data) {
    const visitCounterTemp = [];
    const timePercentageTemp = [];
    data.forEach(element => {
      visitCounterTemp.push({'name': `${element.url}`,'value':element.visits});
      timePercentageTemp.push({'name': `${element.url}`,'value':element.time});
    });
    this.visitCounter = visitCounterTemp;
    this.timePercentage = timePercentageTemp;
  }
}
