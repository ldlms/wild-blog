import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Article} from '../../Models/article';
import { ArticleComponent } from "../article/article.component";
import { ArticlesService } from '../../shared/articles.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgClass, NgStyle, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  articles:Article[] = [];

  constructor(private articleService:ArticlesService){}
  
  ngOnInit(): void {
    this.articles = this.articleService.getArticles(); 
  }

  incrementLikes(id:number):void{
    this.articleService.incrementLikes(id);
  }

  areNonePublished():boolean{
    return this.articles.filter(article => article.isPublished).length === 0;
  }
}
