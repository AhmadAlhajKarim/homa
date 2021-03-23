import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOverviewComponent } from './year-overview.component';

describe('YearOverviewComponent', () => {
  let component: YearOverviewComponent;
  let fixture: ComponentFixture<YearOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
