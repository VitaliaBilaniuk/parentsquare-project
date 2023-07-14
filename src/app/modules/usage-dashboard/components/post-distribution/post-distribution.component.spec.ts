import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostDistributionComponent } from './post-distribution.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PostDistributionComponent', () => {
  let component: PostDistributionComponent;
  let fixture: ComponentFixture<PostDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDistributionComponent ],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
