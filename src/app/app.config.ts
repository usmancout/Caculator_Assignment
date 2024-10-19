
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CalculatorComponent } from './calculator-app/calculator-app.component';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: CalculatorComponent } 
    ])
  ]
};
