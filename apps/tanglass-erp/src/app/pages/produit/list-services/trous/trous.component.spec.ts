import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrousComponent } from './trous.component';

describe('TrousComponent', () => {
  let component: TrousComponent;
  let fixture: ComponentFixture<TrousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
