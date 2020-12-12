import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncochesComponent } from './encoches.component';

describe('EncochesComponent', () => {
  let component: EncochesComponent;
  let fixture: ComponentFixture<EncochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
