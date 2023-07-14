import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsageDashboardComponent } from './usage-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UsageDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsageDashboardRoutingModule {}
