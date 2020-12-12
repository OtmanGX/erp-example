import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBombageComponent } from './pop-bombage.component';

describe('PopBombageComponent', () => {
  let component: PopBombageComponent;
  let fixture: ComponentFixture<PopBombageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopBombageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopBombageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
