import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator-app.service';

describe('CalculatorAppService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
