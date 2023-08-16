import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialTestingModule } from '../../../testing/material-testing.module';

import { SignupFormComponent } from './signup-form.component';
import { MockComponents } from 'ng-mocks';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { LoginInfoComponent } from '../login-info/login-info.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignupFormComponent,
        MockComponents(PersonalInfoComponent, LoginInfoComponent),
      ],
      imports: [FormsModule, ReactiveFormsModule, MaterialTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
