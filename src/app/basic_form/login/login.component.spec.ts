import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { fillInput } from 'src/testing/component-queries.helper';

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
      fillInput(fixture, 'email', '');
      expect(component.loginForm.valid).toBeFalse();
    });

    it('should require a valid email', () => {
      fillInput(fixture, 'email', 'invalid');
      expect(component.loginForm.valid).toBeFalse();
    });

    it('should require password', () => {
      fillInput(fixture, 'password', '');
      expect(component.loginForm.valid).toBeFalse();
    });
  });
});
