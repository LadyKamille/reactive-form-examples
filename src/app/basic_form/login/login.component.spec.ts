import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
});
