import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablageComponent } from './sablage.component';

describe('SablageComponent', () => {
  let component: SablageComponent;
  let fixture: ComponentFixture<SablageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
