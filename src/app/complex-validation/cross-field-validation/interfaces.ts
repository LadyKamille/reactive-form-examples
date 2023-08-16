import { FormControl, FormGroup } from '@angular/forms';

export type DateForm = FormGroup<DateFormGroup>;

export interface DateFormGroup {
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
}
