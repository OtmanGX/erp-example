import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopTrousComponent } from './pop-trous.component';

describe('PopTrousComponent', () => {
  let component: PopTrousComponent;
  let fixture: ComponentFixture<PopTrousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopTrousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopTrousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
