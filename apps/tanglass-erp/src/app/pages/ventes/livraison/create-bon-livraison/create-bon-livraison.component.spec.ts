import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBonLivraisonComponent } from './create-bon-livraison.component';

describe('CreateBonLivraisonComponent', () => {
  let component: CreateBonLivraisonComponent;
  let fixture: ComponentFixture<CreateBonLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBonLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
