import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { arekValidator } from './test-validation';

@Directive({
  selector: '[appTestValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TestValidationDirective, multi: true }],
})
export class TestValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return arekValidator()(control)
  }
}
