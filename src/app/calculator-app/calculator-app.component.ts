// calculator.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculatorService } from '../calculator-app.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css'],
  standalone: true,
})
export class CalculatorComponent {
  calculatorForm: FormGroup;
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  constructor(private fb: FormBuilder, private calculatorService: CalculatorService) {
    this.calculatorForm = this.fb.group({});
  }

  public getNumber(v: string): void {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
  }

  public getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  public doCalculation(op: string, secondOp: number): void {
    if (this.firstOperand !== null && this.operator) {
      this.currentNumber = String(this.calculatorService.calculate(this.firstOperand, secondOp, this.operator));
      this.firstOperand = parseFloat(this.currentNumber);
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public setOperator(op: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentNumber);
    } else if (this.operator) {
      this.doCalculation(op, parseFloat(this.currentNumber));
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public getResult(): void {
    if (this.firstOperand !== null && this.operator) {
      this.doCalculation(this.operator, parseFloat(this.currentNumber));
      this.operator = null;
      this.firstOperand = null;
    }
  }
}
