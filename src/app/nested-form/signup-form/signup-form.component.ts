import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  SignupFormGroup,
  Step,
  PersonalInfoFormGroup,
  LoginInfoFormGroup,
} from '../interfaces';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  public signupForm!: FormGroup<SignupFormGroup>;

  private currentStepSubject: BehaviorSubject<Step> = new BehaviorSubject<Step>(
    'personalInfo'
  );
  public currentStep$: Observable<Step> =
    this.currentStepSubject.asObservable();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group<SignupFormGroup>({
      personalInfo: this.fb.group<PersonalInfoFormGroup>({
        roleId: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
        firstName: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
        lastName: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
        campus: this.fb.control(null),
        email: this.fb.nonNullable.control('', {
          validators: [Validators.required, Validators.email],
        }),
        professorRole: this.fb.control(null),
      }),
      loginInfo: this.fb.group<LoginInfoFormGroup>({
        password: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
        passwordConfirmation: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
        acceptedTOS: this.fb.nonNullable.control(false, {
          validators: [Validators.required],
        }),
      }),
    });
  }

  changeStep(): void {
    console.log('changeStep form value', this.signupForm.value);

    this.currentStepSubject.next('loginInfo');
  }

  createAccount(): void {
    console.log('createAccount form value', this.signupForm.value);
    console.log('createAccount form errors', this.signupForm.errors);

    const { personalInfo, loginInfo } = this.signupForm.value;
    // make request to create user
  }
}
