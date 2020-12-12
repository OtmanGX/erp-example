import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSystemeApparentComponent } from './pop-systeme-apparent.component';

describe('PopSystemeApparentComponent', () => {
  let component: PopSystemeApparentComponent;
  let fixture: ComponentFixture<PopSystemeApparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopSystemeApparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSystemeApparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
