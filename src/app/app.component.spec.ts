import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MockComponents } from 'ng-mocks';

import { AppComponent } from './app.component';
import { LoginComponent } from './basic-form/login/login.component';
import { SignupFormComponent } from './nested-form/signup-form/signup-form.component';
import { CustomValidatorClassComponent } from './complex-validation/custom-validator-class/custom-validator-class.component';
import { CrossFieldValidationComponent } from './complex-validation/cross-field-validation/cross-field-validation.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(
          SignupFormComponent,
          CustomValidatorClassComponent,
          CrossFieldValidationComponent
        ),
      ],
      imports: [
        MockComponents(ConditionalRenderingComponent, LoginComponent),
        MatDividerModule,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reactive-form-examples'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reactive-form-examples');
  });
});
