import { Component } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"
import { map } from 'rxjs';

@Component({
  selector: 'app-by-school',
  templateUrl: './by-school.component.html',
  styleUrls: ['./by-school.component.scss']
})
export class BySchoolComponent {
  constructor(private dashboardService: DashboardService) {}

  chartId = 'MyBar';
  type = 'bar';

  options = {
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
            font: screen.width < 465 ? {size: 9} : {size: 14},
            maxRotation: 90,
            minRotation: 90
           }
    }
      
    }
  }

  postsDistributionBySchoolData$ = this.dashboardService.getPostsDistributionBySchoolData().pipe(
    map((data) => data = {
      labels: data.map((item:any) => `${item.schoolName}`),
      datasets: [{
        data: data.map((item:any) => item.postsNumber),
        backgroundColor: 'rgba(124,174,41,255)',
      }]
    }
    ),
  );
  // data = {
  //   labels: ['Adam Elementary School','Alvin Elementary School','Arellanes Elementary','Arellanes Junior High',
  //            'Battles Elementary', 'Bonita Elementary', 'El Camino Junior High','Fairlawn Elementary','Fesler Junior High',
  //            'Jimenez Elemenatry','Kunst(Tommie) Junior', 'Liberty Elementary', 'Miller (isaac)', 'Oakley (Calvin C.)',
  //            'Ontiveros Elemenatry', 'Rice (William)', 'Robert Bruce Elementary','Sanchez Elementary', 'Taylor Elementary',
  //            'Tunnell (Martin Luther)'], 
  //    datasets: [
  //     {
  //       data: ['467','576', '572', '79', '92',
  //       '574', '573', '576', '467','576', '572', '79', '92',
  //       '574', '573', '576','467','576', '572','92'],
  //       backgroundColor: 'rgba(124,174,41,255)'
  //     }
  //   ]
  // };
  
}
