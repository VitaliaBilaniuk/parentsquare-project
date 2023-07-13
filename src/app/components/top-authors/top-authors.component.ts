import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { take, finalize, switchMap, filter, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-top-authors',
  templateUrl: './top-authors.component.html',
  styleUrls: ['./top-authors.component.scss']
})
export class TopAuthorsComponent implements AfterViewInit {
  getAuthorsStatisticsData$ = this.dashboardService.getAuthorsStatistics();

  constructor(private dashboardService: DashboardService) {}

  ngAfterViewInit() {
    setTimeout(()=> this.generateChart(), 500);
  }

  generateChart() {
    const circleElements = document.querySelectorAll('.circle');
    circleElements.forEach(circle => {
      const load = circle.getAttribute('data-load') || '{}';
      const size = (parseInt(load) / 100) * 10 + 5; // Calculate the size dynamically (adjust the multiplication factor as needed)
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('width', `${size}vw`);
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('height', `${size}vw`);
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('line-height', `${size}vw`);
    });
  }
}
