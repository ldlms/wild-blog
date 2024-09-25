import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-directives',
  standalone: true,
  imports: [NgIf,NgStyle,FormsModule],
  templateUrl: './exercice-directives.component.html',
  styleUrl: './exercice-directives.component.scss'
})
export class ExerciceDirectivesComponent {

  isAdmin:boolean = true;

  toggleAdmin(){
    this.isAdmin = !this.isAdmin;
  }

}
