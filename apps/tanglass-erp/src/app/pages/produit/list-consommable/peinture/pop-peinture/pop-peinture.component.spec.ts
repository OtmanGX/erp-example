import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPeintureComponent } from './pop-peinture.component';

describe('PopPeintureComponent', () => {
  let component: PopPeintureComponent;
  let fixture: ComponentFixture<PopPeintureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPeintureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopPeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
