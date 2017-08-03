/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LugarsService } from './lugars.service';

describe('LugarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LugarsService]
    });
  });

  it('should ...', inject([LugarsService], (service: LugarsService) => {
    expect(service).toBeTruthy();
  }));
});
