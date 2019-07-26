import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsCardSpawnerComponent } from './dashboards-card-spawner.component';

describe('DashboardsCardSpawnerComponent', () => {
  let component: DashboardsCardSpawnerComponent;
  let fixture: ComponentFixture<DashboardsCardSpawnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsCardSpawnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsCardSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
