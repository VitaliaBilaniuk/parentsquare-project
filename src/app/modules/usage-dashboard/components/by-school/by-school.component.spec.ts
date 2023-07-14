import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BySchoolComponent } from './by-school.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BySchoolComponent', () => {
  let component: BySchoolComponent;
  let fixture: ComponentFixture<BySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BySchoolComponent ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
