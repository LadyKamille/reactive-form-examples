import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DateForm } from '../interfaces';

export class CustomValidators {
  static dateRange(form: DateForm): ValidationErrors | null {
    const startDate = form.controls.startDate.value;
    const endDate = form.controls.endDate.value;

    if (startDate && endDate) {
      const isRangeValid = endDate.getTime() - startDate.getTime() > 0;

      return isRangeValid ? null : { dateRange: true };
    }

    return null;
  }
}

// Custom cross-field validator function
// https://angular.io/guide/form-validation#cross-field-validation
export const dateRangeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');

  if (startDate?.value && endDate?.value) {
    const isRangeValid =
      endDate.value.getTime() - startDate.value.getTime() > 0;

    return isRangeValid ? null : { dateRange: true };
  }

  return null;
};
