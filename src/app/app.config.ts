// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CalculatorComponent } from './calculator-app/calculator-app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: CalculatorComponent } // Display CalculatorComponent at the root path
    ])
  ]
};
