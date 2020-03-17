import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visit-counter',
  templateUrl: './visit-counter.component.html',
  styleUrls: ['./visit-counter.component.scss']
})
export class VisitCounterComponent implements OnInit {

  constructor() { }
  @Input('data') data;
  @Input('name') name;
  @Input('surname') surname;

  ngOnInit(): void {
  }
  view: any[] = [600, 400];

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Website';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#4c4cff']
  };
}
