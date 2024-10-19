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
}

