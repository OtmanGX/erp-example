import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopClientFormComponent } from './pop-client-form.component';

describe('PopClientFormComponent', () => {
  let component: PopClientFormComponent;
  let fixture: ComponentFixture<PopClientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopClientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
