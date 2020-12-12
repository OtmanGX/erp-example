import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDevisComponent } from './form-devis.component';

describe('FormDevisComponent', () => {
  let component: FormDevisComponent;
  let fixture: ComponentFixture<FormDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
