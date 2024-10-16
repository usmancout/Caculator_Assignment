import { TestBed } from '@angular/core/testing';

import { CalculatorAppService } from './calculator-app.service';

describe('CalculatorAppService', () => {
  let service: CalculatorAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
