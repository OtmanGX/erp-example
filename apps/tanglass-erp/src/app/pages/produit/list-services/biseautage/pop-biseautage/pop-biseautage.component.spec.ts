import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBiseautageComponent } from './pop-biseautage.component';

describe('PopBiseautageComponent', () => {
  let component: PopBiseautageComponent;
  let fixture: ComponentFixture<PopBiseautageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopBiseautageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopBiseautageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
