import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordPolisComponent } from './bord-polis.component';

describe('BordPolisComponent', () => {
  let component: BordPolisComponent;
  let fixture: ComponentFixture<BordPolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordPolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordPolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
