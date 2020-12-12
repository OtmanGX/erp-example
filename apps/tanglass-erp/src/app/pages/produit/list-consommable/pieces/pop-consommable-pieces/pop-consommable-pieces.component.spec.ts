import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopConsommablePiecesComponent } from './pop-consommable-pieces.component';

describe('PopMcComponent', () => {
  let component: PopConsommablePiecesComponent;
  let fixture: ComponentFixture<PopConsommablePiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopConsommablePiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopConsommablePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
