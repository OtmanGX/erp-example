import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAccessoiresComponent } from './pick-accessoires.component';

describe('PickAccessoiresComponent', () => {
  let component: PickAccessoiresComponent;
  let fixture: ComponentFixture<PickAccessoiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickAccessoiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
