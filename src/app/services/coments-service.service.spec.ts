import { TestBed, inject } from '@angular/core/testing';

import { ComentsServiceService } from './coments-service.service';

describe('ComentsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComentsServiceService]
    });
  });

  it('should be created', inject([ComentsServiceService], (service: ComentsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
