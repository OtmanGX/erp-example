import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFicheComponent } from './invoice-fiche.component';

describe('InvoiceFicheComponent', () => {
  let component: InvoiceFicheComponent;
  let fixture: ComponentFixture<InvoiceFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
