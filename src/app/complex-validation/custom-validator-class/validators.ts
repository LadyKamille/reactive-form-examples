import { AbstractControl, ValidationErrors } from '@angular/forms';

const BASE_CLASSES = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard',
];

const BASE_RACES = [
  'dragonborn',
  'dwarf',
  'elf',
  'gnome',
  'half-elf',
  'halfling',
  'half-orc',
  'human',
  'tiefling',
];

export const WEAPONS_LIST = [
  'club',
  'dagger',
  'great club',
  'hand axe',
  'javelin',
  'light hammer',
  'mace',
];

export class CharacterFormValidators {
  static playersHandbookClass(
    control: AbstractControl
  ): ValidationErrors | null {
    return BASE_CLASSES.includes(control.value.toLowerCase())
      ? null
      : { playersHandbookClass: true };
  }

  static warlockRejector(control: AbstractControl): ValidationErrors | null {
    if (control.value.toLowerCase() === 'warlock') {
      return { warlockRejector: true };
    }
    return null;
  }

  static playersHandbookRace(
    control: AbstractControl
  ): ValidationErrors | null {
    return BASE_RACES.includes(control.value.toLowerCase())
      ? null
      : { playersHandbookRace: true };
  }

  static maxWeapons(control: AbstractControl): ValidationErrors | null {
    if (control.value.length > 3) {
      return { maxWeapons: true };
    }
    return null;
  }
}
