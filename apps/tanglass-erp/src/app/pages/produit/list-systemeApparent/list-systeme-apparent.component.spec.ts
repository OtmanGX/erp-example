import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSystemeApparentComponent } from './list-systeme-apparent.component';

describe('ListSystemeApparentComponent', () => {
  let component: ListSystemeApparentComponent;
  let fixture: ComponentFixture<ListSystemeApparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSystemeApparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSystemeApparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
