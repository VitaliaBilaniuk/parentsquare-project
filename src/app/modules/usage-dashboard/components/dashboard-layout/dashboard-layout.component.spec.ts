import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, ChartType, ChartData, ChartOptions }from 'chart.js/auto';
import { DashboardLayoutComponent } from './dashboard-layout.component';

describe('DashboardLayoutComponent', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a chart with the provided properties', () => {
    const chartId = 'myChart';
    const type : ChartType= 'bar';
    const data = { labels: ['A', 'B', 'C'], datasets: [{ data: [1, 2, 3] }] };
    const options = { responsive: true };

    component.chartId = chartId;
    component.type = type;
    component.data = data;
    component.options = options;
    component.createChart();
    
    expect(component.chart).toBeDefined();
    expect(component.chart instanceof Chart).toBeTruthy();
    expect(component.chartId).toEqual(chartId);
    expect((component.chart.config as { type: ChartType }).type).toEqual(type);
    expect(component.chart.config.data).toEqual(data);
    expect(component.chart.config.options).toEqual(options);
  });
});
