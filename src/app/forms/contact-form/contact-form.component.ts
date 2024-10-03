import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailVerificatorDirective } from '../../shared/verificators/email-verificator.directive';

export interface Message  {
  lastname:string,
  firstname:string,
  email:string,
  content:string,
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,EmailVerificatorDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  message:Message = {
    lastname : '',
    firstname: '',
    email:'',
    content:'',
  }

  onSubmit():void{
    console.log(this.message);
  }
}
