import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySchoolComponent } from './by-school.component';

describe('BySchoolComponent', () => {
  let component: BySchoolComponent;
  let fixture: ComponentFixture<BySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BySchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
