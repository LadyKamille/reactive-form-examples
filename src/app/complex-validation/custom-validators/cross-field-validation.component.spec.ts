import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationComponent } from './cross-field-validation.component';

describe('CustomValidatorsComponent', () => {
  let component: CrossFieldValidationComponent;
  let fixture: ComponentFixture<CrossFieldValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrossFieldValidationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossFieldValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
