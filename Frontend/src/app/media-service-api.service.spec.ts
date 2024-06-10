import { TestBed } from '@angular/core/testing';

import { MediaServiceAPIService } from './media-service-api.service';

describe('MediaServiceAPIService', () => {
  let service: MediaServiceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaServiceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
