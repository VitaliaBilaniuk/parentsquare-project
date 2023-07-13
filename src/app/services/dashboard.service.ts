import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorsModel, PostDistributionModel, PostDistributionBySchoolModel } from '../models/usageDashboard.model';
@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private authorsUrl = 'api/authors/';
  private postsDistributionUrl = 'api/postsDistribution/';
  private postsDistributionBySchoolUrl = 'api/schools/';

  constructor(private http: HttpClient) { }

  getAuthorsStatistics(): Observable<AuthorsModel> {
    return this.http.get<AuthorsModel>(this.authorsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  getPostsDistributionData(): Observable<Array<PostDistributionModel>> {
    return this.http.get<Array<PostDistributionModel>>(this.postsDistributionUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  getPostsDistributionBySchoolData(): Observable<Array<PostDistributionBySchoolModel>> {
    return this.http.get<Array<PostDistributionBySchoolModel>>(this.postsDistributionBySchoolUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    return throwError(() => new Error('server error'));
  }
}