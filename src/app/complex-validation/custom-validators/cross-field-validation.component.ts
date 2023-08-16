import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateForm, DateFormGroup } from '../interfaces';
import { dateRangeValidator } from './validators';

@Component({
  selector: 'cross-field-validation',
  templateUrl: './cross-field-validation.component.html',
  styleUrls: ['./cross-field-validation.component.scss'],
})
export class CrossFieldValidationComponent {
  dateForm: DateForm = new FormGroup<DateFormGroup>(
    {
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    },
    { validators: dateRangeValidator }
  );
}
