import { Component} from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { map, Observable} from 'rxjs';
import { PostDistributionModel } from '../../models/usageDashboard.model';
import { ChartType, ChartOptions, ChartData }from 'chart.js/auto';
@Component({
  selector: 'app-post-distribution',
  templateUrl: './post-distribution.component.html',
  styleUrls: ['./post-distribution.component.scss']
})

export class PostDistributionComponent{

  constructor(private dashboardService: DashboardService) {}

  chartId = 'MyDoughnut';
  type: ChartType = 'doughnut';
  options: ChartOptions= {
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

  postsDistributionData$: Observable<ChartData> = this.dashboardService.getPostsDistributionData().pipe(
    map((data) => {
      const chartData: ChartData = { 
        labels: data.map((item: PostDistributionModel) => `${item.postsNumber.toLocaleString()} ${item.group}`),
        datasets: [{
          data: data.map((item: PostDistributionModel) => item.postsNumber),
          backgroundColor: [
            'rgba(221,107,147,255)',
            'rgba(124,174,41,255)',
            'rgba(115,186,240,255)',
            'rgba(251,186,75,255)'
          ],
          hoverOffset: 4,
          pointStyle: 'circle',
        }]
      };
      return chartData;
    }),
  );
}