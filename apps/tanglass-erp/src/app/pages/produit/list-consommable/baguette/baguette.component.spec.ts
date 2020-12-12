import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaguetteComponent } from './baguette.component';

describe('BaguetteComponent', () => {
  let component: BaguetteComponent;
  let fixture: ComponentFixture<BaguetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaguetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaguetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
