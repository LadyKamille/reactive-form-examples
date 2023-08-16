import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorClassComponent } from './custom-validator-class.component';

describe('CustomValidatorClassComponent', () => {
  let component: CustomValidatorClassComponent;
  let fixture: ComponentFixture<CustomValidatorClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidatorClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidatorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
