import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopGlassComponent } from './pop-glass.component';

describe('PopMpComponent', () => {
  let component: PopGlassComponent;
  let fixture: ComponentFixture<PopGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
