import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopContactsTableComponent } from './pop-contacts-table.component';

describe('PopContactsTableComponent', () => {
  let component: PopContactsTableComponent;
  let fixture: ComponentFixture<PopContactsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopContactsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
