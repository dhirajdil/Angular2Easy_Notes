import { TestBed } from '@angular/core/testing';

import { EasynotesdataService } from './easynotesdata.service';

describe('EasynotesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasynotesdataService = TestBed.get(EasynotesdataService);
    expect(service).toBeTruthy();
  });
});
