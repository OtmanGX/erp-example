import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravageComponent } from './gravage.component';

describe('GravageComponent', () => {
  let component: GravageComponent;
  let fixture: ComponentFixture<GravageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
