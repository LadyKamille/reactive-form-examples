import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CharacterForm, CharacterFormGroup } from './interfaces';
import { CharacterFormValidators, WEAPONS_LIST } from './validators';

@Component({
  selector: 'custom-validator-class',
  templateUrl: './custom-validator-class.component.html',
  styleUrls: ['./custom-validator-class.component.scss'],
})
export class CustomValidatorClassComponent {
  readonly weaponsList: string[] = WEAPONS_LIST;

  form: CharacterForm = this.fb.group<CharacterFormGroup>({
    name: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    race: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        CharacterFormValidators.playersHandbookRace,
      ],
    }),
    characterClass: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        CharacterFormValidators.playersHandbookClass,
        CharacterFormValidators.warlockRejector,
      ],
    }),
    weapons: this.fb.control([], {
      validators: [CharacterFormValidators.maxWeapons],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
