import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireOrdersComponent } from './accessoire-orders.component';

describe('AccessoireOrdersComponent', () => {
  let component: AccessoireOrdersComponent;
  let fixture: ComponentFixture<AccessoireOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoireOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoireOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
