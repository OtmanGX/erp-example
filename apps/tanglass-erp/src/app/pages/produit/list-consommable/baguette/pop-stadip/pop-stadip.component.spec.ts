import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopStadipComponent } from './pop-stadip.component';

describe('PopStadipComponent', () => {
  let component: PopStadipComponent;
  let fixture: ComponentFixture<PopStadipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopStadipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopStadipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
