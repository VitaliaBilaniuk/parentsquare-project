import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private authorsUrl = 'api/authors/';
  private postsDistributionUrl = 'api/postsDistribution/';
  private postsDistributionBySchoolUrl = 'api/schools/';

  constructor(private http: HttpClient) { }

  getAuthorsStatistics(): Observable<any> {
    return this.http.get<any>(this.authorsUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  getPostsDistributionData(): Observable<any> {
    return this.http.get<any>(this.postsDistributionUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  getPostsDistributionBySchoolData(): Observable<any> {
    return this.http.get<any>(this.postsDistributionBySchoolUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler(error);
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error('server error'));
  }

}