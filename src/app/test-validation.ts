import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function arekValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'arek' ? null : { forbiddenName: { value: control.value } }
  };
}