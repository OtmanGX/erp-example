import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickVerreClientComponent } from './pick-verre-client.component';

describe('PickVerreClientComponent', () => {
  let component: PickVerreClientComponent;
  let fixture: ComponentFixture<PickVerreClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickVerreClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickVerreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
