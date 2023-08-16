import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MaterialTestingModule } from '../../../testing/material-testing.module';

import { LoginInfoComponent } from './login-info.component';
import {
  LoginInfoFormGroup,
  PersonalInfoFormGroup,
  SignupForm,
  SignupFormGroup,
} from '../interfaces';

describe('LoginInfoComponent', () => {
  let component: LoginInfoComponent;
  let fixture: ComponentFixture<LoginInfoComponent>;

  const mockForm = new FormGroup({
    password: new FormControl(null, Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    acceptedTOS: new FormControl(),
  }) as unknown as FormGroup<LoginInfoFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginInfoComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInfoComponent);
    component = fixture.componentInstance;
    component.parentForm = new FormGroup<SignupFormGroup>({
      personalInfo: new FormGroup(
        {}
      ) as unknown as FormGroup<PersonalInfoFormGroup>,
      loginInfo: mockForm,
    }) as unknown as SignupForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
