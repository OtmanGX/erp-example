import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrempageComponent } from './trempage.component';

describe('TrempageComponent', () => {
  let component: TrempageComponent;
  let fixture: ComponentFixture<TrempageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrempageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
