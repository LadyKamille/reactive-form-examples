import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SignupFormGroup } from '../interfaces';

@Component({
  selector: 'login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  @Input() parentForm!: FormGroup<SignupFormGroup>;

  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();
}
