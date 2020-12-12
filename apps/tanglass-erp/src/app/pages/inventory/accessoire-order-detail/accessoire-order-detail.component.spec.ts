import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireOrderDetailComponent } from './accessoire-order-detail.component';

describe('AccessoireOrderDetailComponent', () => {
  let component: AccessoireOrderDetailComponent;
  let fixture: ComponentFixture<AccessoireOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoireOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoireOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
