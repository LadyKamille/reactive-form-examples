import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignupFormGroup } from '../interfaces';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  @Input() parentForm!: FormGroup<SignupFormGroup>;

  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('PersonalInfoComponent parentForm', this.parentForm);
  }
}
