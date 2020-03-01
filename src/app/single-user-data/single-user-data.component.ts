import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user-data',
  templateUrl: './single-user-data.component.html',
  styleUrls: ['./single-user-data.component.scss']
})
export class SingleUserDataComponent implements OnInit {

  name = 'Name';
  surname = 'Surname';

  constructor() { }

  ngOnInit(): void {
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
  single = [
    {
      "name": "Youtube",
      "value": 120
    },
    {
      "name": "Gmail",
      "value": 30
    },
    {
      "name": "9gag",
      "value": 50
    },
    {
      "name": "CNN",
      "value": 15
    }
  ];
}
