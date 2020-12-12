import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDevisComponent } from './fiche-devis.component';

describe('FicheDevisComponent', () => {
  let component: FicheDevisComponent;
  let fixture: ComponentFixture<FicheDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
