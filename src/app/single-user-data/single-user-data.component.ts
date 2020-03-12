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
  
  lol = [];

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
    const temp = [];
    data.forEach(element => {
      temp.push({'name': `${element.url}`,'value':element.timestamps.length});
    });
    this.lol = temp;
  }

  view: any[] = [600, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Website';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50']
  };

  showLabels = true;
  
}
