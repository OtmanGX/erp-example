import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopWarnComponent } from './pop-warn.component';

describe('PopWarnComponent', () => {
  let component: PopWarnComponent;
  let fixture: ComponentFixture<PopWarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopWarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopWarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
