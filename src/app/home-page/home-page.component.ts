import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Article} from '../Models/article';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgClass, NgStyle, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  router:Router = inject(Router);

  articles:Array<Article> = [
    new Article(
      1,
      'Angular 16: Les nouveautés',
      'Alice',
      'Les nouveautés d\'Angular 16 incluent...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      120,
    ),
    new Article (
      2,
      'Développer une API REST',
      'Bob',
      'Développer une API REST nécessite...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      75,
    ),
    new Article(
      3,
      'Pourquoi TypeScript est essentiel ?',
      'Charlie',
      'TypeScript apporte de la robustesse...',
      'https://via.placeholder.com/350x150',
      true,
      '',
      200,
    )
  ];

  areNonePublished():boolean{
    return this.articles.filter(article => article.isPublished).length === 0;
  }

  goToArticle(article:Article){
    this.router.navigate(['/article',article.id]);
    console.log(this.router);
  }
}
