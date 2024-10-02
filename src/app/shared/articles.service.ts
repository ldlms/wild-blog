import { Injectable } from '@angular/core';
import { Article } from '../Models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  private articles:Array<Article> = [
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

  public getArticles():Array<Article>{
    return this.articles;
  }

  public incrementLikes(id:number):void{
    (this.articles.find(article => article.id === id) as Article).likes++;
  }
}
