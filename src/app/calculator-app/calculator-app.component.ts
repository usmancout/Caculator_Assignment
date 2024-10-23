import { Component } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [DecimalPipe]
})
export class CalculatorComponent {
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;
  currentTheme: number = 1;

  constructor(private decimalPipe: DecimalPipe) {}

  // Handle number input
  public getNumber(value: string): void {
    if (this.waitForSecondNumber) {
      this.currentNumber = value;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = value : this.currentNumber += value;
    }
    this.formatNumber();
  }

  // Format the number with commas
  private formatNumber(): void {
    this.currentNumber = this.decimalPipe.transform(this.currentNumber.replace(/,/g, ''), '1.0-0') || '0';
  }

  // Handle decimal input
  public getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  // Perform calculation based on operator
  private doCalculation(op: string, secondOp: number): number {
    switch (op) {
      case '+': return (this.firstOperand || 0) + secondOp;
      case '-': return (this.firstOperand || 0) - secondOp;
      case 'x': return (this.firstOperand || 0) * secondOp;
      case '/': return (this.firstOperand || 0) / secondOp;
      default: return secondOp;
    }
  }

  // Handle operator input
  public getOperation(op: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, parseFloat(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    this.formatNumber();
  }

  // Clear all inputs
  public clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  // Delete the last entered character
  public delete(): void {
    this.currentNumber = this.currentNumber.slice(0, -1) || '0';
  }

  // Calculate the final result
  public calculate(): void {
    if (this.firstOperand !== null && this.operator !== null) {
      this.currentNumber = String(this.doCalculation(this.operator, parseFloat(this.currentNumber)));
      this.firstOperand = null;
      this.operator = null;
      this.waitForSecondNumber = false;
      this.formatNumber();
    }
  }

  // Method to change the theme
  public changeTheme(theme: number): void {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', `theme-${theme}`);
  }
}
