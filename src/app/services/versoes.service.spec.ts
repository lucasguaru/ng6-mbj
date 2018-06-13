import { TestBed, inject } from '@angular/core/testing';

import { VersoesService } from './versoes.service';

describe('VersoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersoesService]
    });
  });

  it('should be created', inject([VersoesService], (service: VersoesService) => {
    expect(service).toBeTruthy();
  }));
});
