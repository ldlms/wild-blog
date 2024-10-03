import { Directive, Input } from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[EmailVerificator]',
  standalone: true,
  providers:[{
    provide: NG_VALIDATORS,
    useExisting:EmailVerificatorDirective,
    multi: true
}]
})
export class EmailVerificatorDirective implements Validator {

  constructor(){}

  validate(control:FormControl): ValidationErrors | null  {
    const regex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$');
    const email = control.value.toUpperCase();
    const verifiedEmail = regex.test(email);
    console.log(verifiedEmail);
    return verifiedEmail? null : {validEmail:true};
    }
}


