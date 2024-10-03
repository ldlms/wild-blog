import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder,ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../shared/classServices/user.service';
import { UserListComponent } from "../../composants/user-list/user-list.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, UserListComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor(private userService:UserService){}

formBuilder = inject(FormBuilder);

registerForm = this.formBuilder.group({
  username: ['',[Validators.required,Validators.minLength(3)]],
  email: ['',[Validators.required,this.validateEmail()]],
  passwords: this.formBuilder.group({
    password: ['',[Validators.required,this.securePassword()]],
    confirmPassword:['',[Validators.required]],
  },{validators: this.passwordMatchValidator()}),
  address :this.formBuilder.group({
    street:['',[Validators.required]],
    number:[,[Validators.required]],
    postalCode:[,[Validators.required]],
    city:['',[Validators.required]],
  })
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
  if(this.registerForm.valid){
    console.log("Formulaire envoyé avec succés",this.registerForm.value);
    this.userService.addUser(
      this.registerForm.get('username')?.value || '',
      this.registerForm.get('email')?.value || '',
      this.registerForm.get('passwords.password')?.value || '',
      this.registerForm.get('address.street')?.value || '',
      parseInt(this.registerForm.get('address.number')?.value || '',10),
      this.registerForm.get('address.city')?.value || '',
      parseInt(this.registerForm.get('address.postalCode')?.value || '',10),
    );
  }else{
    console.log("Big problem");
  }
}

}
