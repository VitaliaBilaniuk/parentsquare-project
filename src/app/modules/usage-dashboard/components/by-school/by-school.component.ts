import { Component } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { map, Observable } from 'rxjs';
import { PostDistributionBySchoolModel } from '../../models/usageDashboard.model';
import { ChartType, ChartOptions, ChartData }from 'chart.js/auto';
@Component({
  selector: 'app-by-school',
  templateUrl: './by-school.component.html',
  styleUrls: ['./by-school.component.scss']
})

export class BySchoolComponent {

  constructor(private dashboardService: DashboardService) {}

  chartId: string = 'MyBar';
  type: ChartType = 'bar';   

  options: ChartOptions = {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          font: screen.width < 680 ? {size: 5} : {size: 14},
          maxRotation: 90,
          minRotation: 90
        }
      }    
    }
  }

  postsDistributionBySchoolData$: Observable<ChartData> = this.dashboardService.getPostsDistributionBySchoolData().pipe(
    map((data) => {
      const chartData: ChartData = {
        labels: data.map((item: PostDistributionBySchoolModel) => item.schoolName),
        datasets: [{
          data: data.map((item: PostDistributionBySchoolModel) => item.postsNumber),
          backgroundColor: 'rgba(124,174,41,255)',
        }]
      };
      return chartData;
    }));
}
