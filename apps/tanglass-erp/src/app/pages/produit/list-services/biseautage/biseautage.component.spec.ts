import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiseautageComponent } from './biseautage.component';

describe('BiseautageComponent', () => {
  let component: BiseautageComponent;
  let fixture: ComponentFixture<BiseautageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiseautageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiseautageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
