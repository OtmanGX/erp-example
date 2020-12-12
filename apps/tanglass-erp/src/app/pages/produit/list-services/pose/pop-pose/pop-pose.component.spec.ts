import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPoseComponent } from './pop-pose.component';

describe('PopPoseComponent', () => {
  let component: PopPoseComponent;
  let fixture: ComponentFixture<PopPoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
