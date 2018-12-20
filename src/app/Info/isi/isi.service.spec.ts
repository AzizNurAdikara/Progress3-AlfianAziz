import { TestBed, async, inject } from '@angular/core/testing';
import { IsiService } from './isi.service';

describe('Service: Isi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsiService]
    });
  });

  it('should ...', inject([IsiService], (service: IsiService) => {
    expect(service).toBeTruthy();
  }));
});
