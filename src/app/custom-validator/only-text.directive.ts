import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: OnlyTextDirective, multi: true
  }]
})
export class OnlyTextDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
      return {invalidText: true}
    }
    return null;
  }
 

}
