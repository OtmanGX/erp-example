import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAluminiumComponent } from './pop-aluminium.component';

describe('PopAluminiumComponent', () => {
  let component: PopAluminiumComponent;
  let fixture: ComponentFixture<PopAluminiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopAluminiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopAluminiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
