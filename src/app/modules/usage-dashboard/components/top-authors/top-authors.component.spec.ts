import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAuthorsComponent } from './top-authors.component';

describe('TopAuthorsComponent', () => {
  let component: TopAuthorsComponent;
  let fixture: ComponentFixture<TopAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
