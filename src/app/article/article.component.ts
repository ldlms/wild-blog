import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ExerciceDirectivesComponent } from "../exercice-directives/exercice-directives.component";
import {Article} from '../Models/article';




@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass, NgStyle, ExerciceDirectivesComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})



export class ArticleComponent {

  @Input() article:Article = {} as Article;

}
