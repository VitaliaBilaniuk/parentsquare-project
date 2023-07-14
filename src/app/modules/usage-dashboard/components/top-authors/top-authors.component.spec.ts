import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TopAuthorsComponent } from './top-authors.component';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

describe('TopAuthorsComponent', () => {
  let component: TopAuthorsComponent;
  let fixture: ComponentFixture<TopAuthorsComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopAuthorsComponent],
      imports: [HttpClientModule],
      providers: [DashboardService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAuthorsComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should call generateChart() after view init', fakeAsync(() => {
    spyOn(component, 'generateChart');
    component.ngAfterViewInit();
    tick(500);
    expect(component.generateChart).toHaveBeenCalled();
  }));


  it('should update circle number styles correctly', () => {
    const mockCircleElement = document.createElement('div');
    mockCircleElement.classList.add('circle');
    mockCircleElement.setAttribute('data-load', '50');

    const mockCircleNumberElement = document.createElement('div');
    mockCircleNumberElement.classList.add('circle-number');
    mockCircleElement.appendChild(mockCircleNumberElement);

    spyOn(document, 'querySelectorAll').and.returnValue(
      [mockCircleElement] as unknown as NodeListOf<Element>
    );

    component.generateChart();

    expect(mockCircleNumberElement.style?.width).toBe('10vw');
    expect(mockCircleNumberElement.style?.height).toBe('10vw');
    expect(mockCircleNumberElement.style?.lineHeight).toBe('10vw');
  });
});
