import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let cal: CalculatorService;

  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('loggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: mockLoggerService },
      ],
    });
    cal = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    let res = cal.add(2, 2);
    expect(res).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let res = cal.subtract(2, 2);
    expect(res).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
