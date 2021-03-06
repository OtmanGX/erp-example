import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCardComponent } from './delivery-card.component';

describe('SalePointCardComponent', () => {
  let component: DeliveryCardComponent;
  let fixture: ComponentFixture<DeliveryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
