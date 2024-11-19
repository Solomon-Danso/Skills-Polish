import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'Stepper',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  activeStep = 0;
  steps = ['Select Cover Type', 'Upload Media', 'Enter Details', 'Complete'];

  getStepIcon(step: number): string {
    switch (step) {
      case 0:
        return '📖'; // Replace with an actual icon if needed
      case 1:
        return '🎥';
      case 2:
        return '👥';
      case 3:
        return '✅';
      default:
        return '✅';
    }
  }

  handleNext(): void {
    if (this.activeStep === this.steps.length - 1) {
      this.handleReset();
    } else {
      this.activeStep++;
    }
  }

  handleBack(): void {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }

  handleReset(): void {
    this.activeStep = 0;
  }


}
