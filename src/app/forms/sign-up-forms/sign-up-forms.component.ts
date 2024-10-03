import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,Validators, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-sign-up-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-forms.component.html',
  styleUrl: './sign-up-forms.component.scss'
})
export class SignUpFormsComponent {

  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, this.validateEmail()]],
    passwords: this.formBuilder.group({
      password: ['', [Validators.required, this.securePassword()]],
      confirmPassword: ['',[Validators.required]],
    }, {validators: this.passwordMatchValidator()})
  });

  ///validateur email
  validateEmail():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null => {
      let regex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
      const value = control.value || '';
      const verifiedEmail = value.toUpperCase().match(regex);
      return verifiedEmail ? null : {validEmail:true};
    } 
  }

  /// a placer séparément 
  securePassword():ValidatorFn {
    return (control:AbstractControl):ValidationErrors | null => {
      const value = control.value || '';

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase =  /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

      return passwordValid ? null : {securePassword : true};
    }
  }

  passwordMatchValidator():ValidatorFn{
    return(formGroup:AbstractControl): ValidationErrors | null =>{
      const password = formGroup.get("password")?.value;
      const verifiedPassword = formGroup.get("confirmPassword")?.value;
      return password === verifiedPassword ? null : {passwordMatchValidator : true};
    }; 
  }

  onSubmit(){
    if(this.signUpForm.valid){
      console.log("Formulaire envoyé avec succés",this.signUpForm.value);
    }else{
      console.log("Big problem");
    }
  }
}
