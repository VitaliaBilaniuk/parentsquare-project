import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { Observable } from 'rxjs';
import { AuthorsModel } from '../../models/usageDashboard.model';
@Component({
  selector: 'app-top-authors',
  templateUrl: './top-authors.component.html',
  styleUrls: ['./top-authors.component.scss']
})
export class TopAuthorsComponent implements AfterViewInit {
  getAuthorsStatisticsData$: Observable<AuthorsModel> = this.dashboardService.getAuthorsStatistics();

  constructor(private dashboardService: DashboardService) {}

  ngAfterViewInit() {
    setTimeout(()=> this.generateChart(), 500);
  }

  generateChart(): void {
    const circleElements = document.querySelectorAll('.circle');
    circleElements.forEach(circle => {
      const load = circle.getAttribute('data-load') || '{}';
      const coefficient = (screen.width > 1800) ? 1 : 10;
      const size = (parseInt(load) / 100) * coefficient + 5;
      
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('width', `${size}vw`);
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('height', `${size}vw`);
      (circle.querySelector('.circle-number') as HTMLElement).style.setProperty('line-height', `${size}vw`);
    });
  }
}
