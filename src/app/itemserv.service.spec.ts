import { TestBed } from '@angular/core/testing';

import { ItemservService } from './itemserv.service';

describe('ItemservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemservService = TestBed.get(ItemservService);
    expect(service).toBeTruthy();
  });
});
