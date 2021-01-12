import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopWarehouseAccessoryComponent } from './pop-warehouse-accessory.component';

describe('PopSalePointsComponent', () => {
  let component: PopWarehouseAccessoryComponent;
  let fixture: ComponentFixture<PopWarehouseAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopWarehouseAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopWarehouseAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
