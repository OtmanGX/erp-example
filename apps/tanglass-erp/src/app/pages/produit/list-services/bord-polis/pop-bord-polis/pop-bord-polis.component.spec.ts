import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBordPolisComponent } from './pop-bord-polis.component';

describe('PopBordPolisComponent', () => {
  let component: PopBordPolisComponent;
  let fixture: ComponentFixture<PopBordPolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopBordPolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopBordPolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
