import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialTestingModule } from '../../../testing/material-testing.module';

import { CustomValidatorClassComponent } from './custom-validator-class.component';

describe('CustomValidatorClassComponent', () => {
  let component: CustomValidatorClassComponent;
  let fixture: ComponentFixture<CustomValidatorClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomValidatorClassComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomValidatorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
