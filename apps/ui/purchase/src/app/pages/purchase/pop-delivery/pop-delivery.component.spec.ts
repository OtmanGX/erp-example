import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDeliveryComponent } from './pop-delivery.component';

describe('PopSalePointsComponent', () => {
  let component: PopDeliveryComponent;
  let fixture: ComponentFixture<PopDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
