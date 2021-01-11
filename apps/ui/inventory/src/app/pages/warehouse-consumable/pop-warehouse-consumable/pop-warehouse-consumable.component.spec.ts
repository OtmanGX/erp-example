import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopWarehouseConsumableComponent } from './pop-warehouse-consumable.component';

describe('PopSalePointsComponent', () => {
  let component: PopWarehouseConsumableComponent;
  let fixture: ComponentFixture<PopWarehouseConsumableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopWarehouseConsumableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopWarehouseConsumableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
