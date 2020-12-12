import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickConsommablesComponent } from './pick-consommables.component';

describe('PickConsommablesComponent', () => {
  let component: PickConsommablesComponent;
  let fixture: ComponentFixture<PickConsommablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickConsommablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickConsommablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
