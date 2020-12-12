import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracageComponent } from './tracage.component';

describe('TracageComponent', () => {
  let component: TracageComponent;
  let fixture: ComponentFixture<TracageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
