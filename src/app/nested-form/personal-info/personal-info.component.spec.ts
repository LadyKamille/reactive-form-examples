import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  clickSubmitButton,
  fillInput,
} from '../../../testing/component-queries.helper';
import { MaterialTestingModule } from '../../../testing/material-testing.module';

import { PersonalInfoComponent } from './personal-info.component';
import {
  LoginInfoFormGroup,
  PersonalInfoFormGroup,
  SignupForm,
  SignupFormGroup,
} from '../interfaces';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  const mockForm = new FormGroup({
    roleId: new FormControl(null, Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    campus: new FormControl(''),
    professorRole: new FormControl(''),
  }) as unknown as FormGroup<PersonalInfoFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInfoComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    component.parentForm = new FormGroup<SignupFormGroup>({
      personalInfo: mockForm,
      loginInfo: new FormGroup({}) as unknown as FormGroup<LoginInfoFormGroup>,
    }) as unknown as SignupForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit button', () => {
    it('should emit personalInfo with valid data', () => {
      spyOn(component.onSubmit, 'emit');

      fillForm(fixture);
      clickSubmitButton(fixture);

      expect(component.onSubmit.emit).toHaveBeenCalled();
    });
  });
});

const fillForm = (fixture: ComponentFixture<PersonalInfoComponent>): void => {
  fillInput(fixture, 'roleId', '10');
  fillInput(fixture, 'firstName', 'Mike');
  fillInput(fixture, 'lastName', 'Wazowski');
  fillInput(fixture, 'email', 'mike.wazowski@monsterincorporated.com');
  fillInput(fixture, 'campus', 'Monsters University');
};
