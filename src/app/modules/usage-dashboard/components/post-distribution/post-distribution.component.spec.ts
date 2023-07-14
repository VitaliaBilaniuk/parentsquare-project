import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDistributionComponent } from './post-distribution.component';

describe('PostDistributionComponent', () => {
  let component: PostDistributionComponent;
  let fixture: ComponentFixture<PostDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDistributionComponent ]
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
