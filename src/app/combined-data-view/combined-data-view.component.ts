import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-data-view',
  templateUrl: './combined-data-view.component.html',
  styleUrls: ['./combined-data-view.component.scss']
})
export class CombinedDataViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  view: any[] = [380, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Website';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  value: number = 500;
  units: string = 'Active users';

  data = [
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
