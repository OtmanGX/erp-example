import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopTrempageComponent } from './pop-trempage.component';

describe('PopTrempageComponent', () => {
  let component: PopTrempageComponent;
  let fixture: ComponentFixture<PopTrempageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopTrempageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopTrempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
