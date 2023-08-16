import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
