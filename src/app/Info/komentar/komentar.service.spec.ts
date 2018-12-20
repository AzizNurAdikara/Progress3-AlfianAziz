import { TestBed, async, inject } from '@angular/core/testing';
import { KomentarService } from './komentar.service';

describe('Service: Komentar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KomentarService]
    });
  });

  it('should ...', inject([KomentarService], (service: KomentarService) => {
    expect(service).toBeTruthy();
  }));
});
