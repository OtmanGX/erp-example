import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopEncochesComponent } from './pop-encoches.component';

describe('PopEncochesComponent', () => {
  let component: PopEncochesComponent;
  let fixture: ComponentFixture<PopEncochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopEncochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopEncochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
