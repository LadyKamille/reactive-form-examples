import { FormGroup, FormControl } from '@angular/forms';

export type Step = 'personalInfo' | 'loginInfo';

export type SignupForm = FormGroup<SignupFormGroup>;

export interface SignupFormGroup {
  personalInfo: FormGroup<PersonalInfoFormGroup>;
  loginInfo: FormGroup<LoginInfoFormGroup>;
}

// I just guessed on types, idk what these actually are
export interface PersonalInfoFormGroup {
  roleId: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  campus: FormControl<string | null>;
  email: FormControl<string>;
  professorRole: FormControl<string | null>;
}

export interface LoginInfoFormGroup {
  password: FormControl<string>;
  passwordConfirmation: FormControl<string>;
  acceptedTOS: FormControl<boolean>;
}
