import { Component, inject, Inject, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Article} from '../home-page/home-page.component'
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  articles:Article[] = [
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
  article!: Article;

  ngOnInit(){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.article = this.articles.find(article => article.id === Number(params.get('id')))as Article;
      console.log(this.article);

    }
    
    )
}


}
