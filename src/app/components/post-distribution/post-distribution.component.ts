import { Component} from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { map } from 'rxjs';

@Component({
  selector: 'app-post-distribution',
  templateUrl: './post-distribution.component.html',
  styleUrls: ['./post-distribution.component.scss']
})

export class PostDistributionComponent{

  constructor(private dashboardService: DashboardService) {}

  chartId = 'MyDoughnut';
  type = 'doughnut';
  options= {
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
        },
      }
    }
  };

  postsDistributionData$ = this.dashboardService.getPostsDistributionData().pipe(
    map((data) => data = {
      labels: data.map((item:any) => `${item.postsNumber.toLocaleString()} ${item.group}`),
      datasets: [{
        data: data.map((item:any) => item.postsNumber),
        backgroundColor: [
          'rgba(221,107,147,255)',
          'rgba(124,174,41,255)',
          'rgba(115,186,240,255)',
          'rgba(251,186,75,255)'
        ],
        hoverOffset: 4,
        pointStyle: 'circle',
      }]
    }
    ),
  );
}