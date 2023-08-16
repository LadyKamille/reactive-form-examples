import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialTestingModule } from '../../../testing/material-testing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test validation by using built in angular form methods
  describe('validation', () => {
    it('should require email', () => {
      component.loginForm.controls.email.setValue('');
      expect(component.loginForm.valid).toBeFalse();
    });

    it('should require a valid email', () => {
      component.loginForm.controls.email.setValue('invalid');
      expect(component.loginForm.valid).toBeFalse();
    });

    it('should require password', () => {
      component.loginForm.controls.password.setValue('');
      expect(component.loginForm.valid).toBeFalse();
    });
  });

  // Test validation with material test harnesses
  // https://material.angular.io/guide/using-component-harnesses
  describe('validation - error messages - test harness', () => {
    it('should show email required error message', async () => {
      const formFieldHarness = await loader.getHarness(MatFormFieldHarness);
      const input = await formFieldHarness.getControl(MatInputHarness);
      await input!.blur();
      const errorMessage = await formFieldHarness.getTextErrors();
      expect(errorMessage).toEqual(['Email is required.']);
    });
  });

  describe('"Login" button clicked', () => {
    it('should call onSubmit method', () => {
      spyOn(component, 'onSubmit');

      const button = fixture.debugElement.query(
        By.css('button[type="submit"]')
      );
      button.nativeElement.click();

      expect(component.onSubmit).toHaveBeenCalled();
    });
  });
});
