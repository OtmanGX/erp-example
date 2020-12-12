import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UchannelComponent } from './uchannel.component';

describe('UchannelComponent', () => {
  let component: UchannelComponent;
  let fixture: ComponentFixture<UchannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UchannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
