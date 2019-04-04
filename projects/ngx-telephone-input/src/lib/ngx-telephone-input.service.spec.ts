import { TestBed } from '@angular/core/testing';

import { NgxTelephoneInputService } from './ngx-telephone-input.service';

describe('NgxTelephoneInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTelephoneInputService = TestBed.get(NgxTelephoneInputService);
    expect(service).toBeTruthy();
  });
});
