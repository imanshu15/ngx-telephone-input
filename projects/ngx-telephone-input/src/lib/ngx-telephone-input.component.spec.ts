import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTelephoneInputComponent } from './ngx-telephone-input.component';

describe('NgxTelephoneInputComponent', () => {
  let component: NgxTelephoneInputComponent;
  let fixture: ComponentFixture<NgxTelephoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTelephoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
