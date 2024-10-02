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
    {
      id:1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120,
    },
    {
      id:2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      id:3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200,
    }
  ];

  areNonePublished():boolean{
    return this.articles.filter(article => article.isPublished).length === 0;
  }

  goToArticle(article:Article){
    this.router.navigate(['/article',article.id]);
    console.log(this.router);
  }
}
