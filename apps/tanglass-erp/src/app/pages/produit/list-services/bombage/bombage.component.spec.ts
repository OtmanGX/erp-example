import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombageComponent } from './bombage.component';

describe('BombageComponent', () => {
  let component: BombageComponent;
  let fixture: ComponentFixture<BombageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
