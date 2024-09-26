import { TestBed } from '@angular/core/testing';

import { ListproductsService } from './listproducts.service';

describe('ListproductsService', () => {
  let service: ListproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
