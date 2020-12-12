import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickServiceComponent } from './pick-service.component';

describe('PickServiceComponent', () => {
  let component: PickServiceComponent;
  let fixture: ComponentFixture<PickServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
