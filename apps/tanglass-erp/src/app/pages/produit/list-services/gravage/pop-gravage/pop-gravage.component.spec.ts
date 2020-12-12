import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopGravageComponent } from './pop-gravage.component';

describe('PopGravageComponent', () => {
  let component: PopGravageComponent;
  let fixture: ComponentFixture<PopGravageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopGravageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopGravageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
