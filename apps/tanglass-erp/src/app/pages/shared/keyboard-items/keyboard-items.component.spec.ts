import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardItemsComponent } from './keyboard-items.component';

describe('KeyboardServicesComponent', () => {
  let component: KeyboardItemsComponent;
  let fixture: ComponentFixture<KeyboardItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
