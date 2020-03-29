import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-percentage',
  templateUrl: './time-percentage.component.html',
  styleUrls: ['./time-percentage.component.scss']
})
export class TimePercentageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('name') name;
  @Input('surname') surname;
  @Input('data') data;
  output;

  view: any[] = [600, 400];

  gradient: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#4c4cff']
  };
}
