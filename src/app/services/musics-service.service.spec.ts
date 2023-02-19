import { TestBed } from '@angular/core/testing';

import { MusicsServiceService } from './musics-service.service';

describe('MusicsServiceService', () => {
  let service: MusicsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
