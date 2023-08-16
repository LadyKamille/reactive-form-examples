import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function fillInput(
  fixture: ComponentFixture<any>,
  inputName: string,
  value: string
): void {
  const inputElement: HTMLInputElement = fixture.debugElement.query(
    By.css(`[name=${inputName}]`)
  )?.nativeElement;

  if (inputElement) {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  } else {
    console.debug(`Input element with ${inputName} not found`);
  }
}

export function getByTestId(
  fixture: ComponentFixture<any>,
  id: string
): HTMLElement {
  return fixture.debugElement.query(By.css(`[data-testid=${id}]`))
    ?.nativeElement;
}
