import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopContactFormComponent } from './pop-contact-form.component';

describe('PopContactFormComponent', () => {
  let component: PopContactFormComponent;
  let fixture: ComponentFixture<PopContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
