import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBonLivraisonComponent } from './form-bon-livraison.component';

describe('FormBonLivraisonComponent', () => {
  let component: FormBonLivraisonComponent;
  let fixture: ComponentFixture<FormBonLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBonLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
