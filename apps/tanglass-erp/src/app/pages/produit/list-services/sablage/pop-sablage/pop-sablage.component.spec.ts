import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSablageComponent } from './pop-sablage.component';

describe('PopSablageComponent', () => {
  let component: PopSablageComponent;
  let fixture: ComponentFixture<PopSablageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopSablageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSablageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
