import { FormControl, FormGroup } from '@angular/forms';

export type CharacterForm = FormGroup<CharacterFormGroup>;

export interface CharacterFormGroup {
  name: FormControl<string>;
  characterClass: FormControl<string>;
  race: FormControl<string>;
  weapons: FormControl<Array<string> | null>;
}
