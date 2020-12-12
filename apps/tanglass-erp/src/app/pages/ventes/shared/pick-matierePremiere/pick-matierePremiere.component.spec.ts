import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMatierePremiereComponent } from './pick-matierePremiere.component';

describe('ItemsPurchasesComponent', () => {
  let component: PickMatierePremiereComponent;
  let fixture: ComponentFixture<PickMatierePremiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickMatierePremiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickMatierePremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
