import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsageDashboardComponent } from './components/usage-dashboard/usage-dashboard.component';
import { PostDistributionComponent } from './components/post-distribution/post-distribution.component';
import { BySchoolComponent } from './components/by-school/by-school.component';
import { TopAuthorsComponent } from './components/top-authors/top-authors.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UsageDashboardComponent,
    PostDistributionComponent,
    BySchoolComponent,
    TopAuthorsComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
