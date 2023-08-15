import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface LoginFormGroup {
  email: FormControl<string>;
  password: FormControl<string>;
  remember: FormControl<boolean>;
}

const EmailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<LoginFormGroup> = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.pattern(EmailRegexPattern)]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log('onSubmit');
  }
}
