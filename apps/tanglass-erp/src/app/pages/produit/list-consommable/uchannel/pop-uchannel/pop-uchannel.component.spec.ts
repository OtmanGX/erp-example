import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUchannelComponent } from './pop-uchannel.component';

describe('PopUchannelComponent', () => {
  let component: PopUchannelComponent;
  let fixture: ComponentFixture<PopUchannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUchannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
