import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopProductComponent } from './pop-product.component';

describe('PopProductComponent', () => {
  let component: PopProductComponent;
  let fixture: ComponentFixture<PopProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
