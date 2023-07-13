import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart }from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements AfterViewInit{
  @Input() chartId = '';
  @Input() data: any;
  @Input() type: any;
  @Input() options: any;
  public chart: any;

  constructor(){}

  ngAfterViewInit() {
    setTimeout(()=>this.createChart(), 500); 
  }

  createChart() {
    this.chart = new Chart(this.chartId, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
  
}
