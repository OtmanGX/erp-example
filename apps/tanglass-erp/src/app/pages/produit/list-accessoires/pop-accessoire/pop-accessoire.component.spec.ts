import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAccessoireComponent } from './pop-accessoire.component';

describe('PopAccessoireComponent', () => {
  let component: PopAccessoireComponent;
  let fixture: ComponentFixture<PopAccessoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopAccessoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
