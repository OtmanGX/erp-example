import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopWarehouseGlasseComponent } from './pop-warehouse-glasse.component';

describe('PopSalePointsComponent', () => {
  let component: PopWarehouseGlasseComponent;
  let fixture: ComponentFixture<PopWarehouseGlasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopWarehouseGlasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopWarehouseGlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
