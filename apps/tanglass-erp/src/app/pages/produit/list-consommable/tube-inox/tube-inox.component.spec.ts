import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeInoxComponent } from './tube-inox.component';

describe('TubeInoxComponent', () => {
  let component: TubeInoxComponent;
  let fixture: ComponentFixture<TubeInoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeInoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeInoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
