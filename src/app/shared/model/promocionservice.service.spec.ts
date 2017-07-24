/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromocionserviceService } from './promocionservice.service';

describe('PromocionserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromocionserviceService]
    });
  });

  it('should ...', inject([PromocionserviceService], (service: PromocionserviceService) => {
    expect(service).toBeTruthy();
  }));
});
