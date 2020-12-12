import { AbstractControl } from '@angular/forms';

export function dimensionsValidator(control: AbstractControl) {
  if (!(control.value>0) ) {
    return { dimensionValid: true };
  }
  return null;
}
