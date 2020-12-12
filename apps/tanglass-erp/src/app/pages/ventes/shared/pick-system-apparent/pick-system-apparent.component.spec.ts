import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSystemApparentComponent } from './pick-system-apparent.component';

describe('PickSystemApparentComponent', () => {
  let component: PickSystemApparentComponent;
  let fixture: ComponentFixture<PickSystemApparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickSystemApparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSystemApparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
