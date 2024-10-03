import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciceDirectivesComponent } from "../exercice-directives/exercice-directives.component";
import { Article } from '../../Models/Article/article';
import { Router } from '@angular/router';




@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass, NgStyle, ExerciceDirectivesComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})



export class ArticleComponent {

  @Input() article: Article = {} as Article;
  @Output() eventLike = new EventEmitter<number>()
  router: Router = inject(Router);

  likeArticle(id: number) {
    this.eventLike.emit(id);
  }

  goToArticle(id: number): void {
    console.log(id);
    this.router.navigate(['/article', id]);
  }

}
