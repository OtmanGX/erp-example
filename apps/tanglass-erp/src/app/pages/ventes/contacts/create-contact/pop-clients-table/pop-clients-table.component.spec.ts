import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopClientsTableComponent } from './pop-clients-table.component';

describe('PopClientsTableComponent', () => {
  let component: PopClientsTableComponent;
  let fixture: ComponentFixture<PopClientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopClientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopClientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
