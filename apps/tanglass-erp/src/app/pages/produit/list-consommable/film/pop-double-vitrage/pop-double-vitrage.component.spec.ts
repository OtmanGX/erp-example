import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDoubleVitrageComponent } from './pop-double-vitrage.component';

describe('PopDoubleVitrageComponent', () => {
  let component: PopDoubleVitrageComponent;
  let fixture: ComponentFixture<PopDoubleVitrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopDoubleVitrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopDoubleVitrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
