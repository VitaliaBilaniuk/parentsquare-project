import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from './dashboard.service';
import { of } from 'rxjs';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpService: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService, {provide: HttpClient}],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(DashboardService);
    httpService = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAuthorsStatistics', () => {
    it('should call http GET call to get authorsStatistics', () => {
      const okResponse =  {
        status: 200,
        statusText: 'OK',
        body:  {
          data: [
            { load: 40, title: 'Shandee Bayne', description: 'Jimenez Elementary School' },
            { load: 40, title: 'Lisette Murillo', description: 'Kunst(Tommie) Junior High School' }
          ],
          total: 207
        },
      };

      spyOn(httpService, 'get').and.returnValue(of({okResponse}));
      service.getAuthorsStatistics();
      expect(httpService.get).toHaveBeenCalled();
    });
  });

  describe('getPostsDistributionData', () => {
    it('should call http GET call to get postsDistributionData', () => {
      const okResponse =  {
        status: 200,
        statusText: 'OK',
        body:  [
          { postsNumber: 6, group: 'District Posts'},
          { postsNumber: 341, group: 'School Posts'},
        ]
      };

      spyOn(httpService, 'get').and.returnValue(of({okResponse}));
      service.getPostsDistributionData();
      expect(httpService.get).toHaveBeenCalled();
    });
  });

  describe('getPostsDistributionBySchoolData', () => {
    it('should call http GET call to get postsDistributionBySchoolData', () => {
      const okResponse =  {
        status: 200,
        statusText: 'OK',
        body: [{ postsNumber: 3, schoolName: 'Test School Name'}]
      };
      spyOn(httpService, 'get').and.returnValue(of({okResponse}));
      service.getPostsDistributionBySchoolData();
      expect(httpService.get).toHaveBeenCalled();
    });
  });
});