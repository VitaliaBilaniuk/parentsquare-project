import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { UsageDashboardRoutingModule } from './usage-dashboard-routing.module'

// Components
import { UsageDashboardComponent } from './usage-dashboard.component';
import { PostDistributionComponent } from './components/post-distribution/post-distribution.component';
import { BySchoolComponent } from './components/by-school/by-school.component';
import { TopAuthorsComponent } from './components/top-authors/top-authors.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

const components = [UsageDashboardComponent, 
    PostDistributionComponent, 
    BySchoolComponent, 
    TopAuthorsComponent, 
    DashboardLayoutComponent];

const modules = [CommonModule,
    UsageDashboardRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class UsageDashboardModule {}
