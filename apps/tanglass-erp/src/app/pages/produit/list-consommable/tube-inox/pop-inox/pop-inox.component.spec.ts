import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInoxComponent } from './pop-inox.component';

describe('PopInoxComponent', () => {
  let component: PopInoxComponent;
  let fixture: ComponentFixture<PopInoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
