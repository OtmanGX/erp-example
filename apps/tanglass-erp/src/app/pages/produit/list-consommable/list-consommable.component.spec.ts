import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcComponent } from './list-mc.component';

describe('ListMcComponent', () => {
  let component: ListMcComponent;
  let fixture: ComponentFixture<ListMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
