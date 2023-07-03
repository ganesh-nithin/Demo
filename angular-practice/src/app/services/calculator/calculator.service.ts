import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}
  add(n1: number, n2: number) {
    let res = n1 + n2;
    this.loggerService.log('Add Operation is called');
    return res;
  }

  subtract(n1: number, n2: number) {
    let res = n1 - n2;
    this.loggerService.log('Subtract Operation is called');
    return res;
  }
}
