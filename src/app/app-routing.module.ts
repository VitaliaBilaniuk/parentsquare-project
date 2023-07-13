import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsageDashboardComponent } from './components/usage-dashboard/usage-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: UsageDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
