import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../../Models/Article/article'
import { NgClass, NgStyle } from '@angular/common';
import { ArticlesService } from '../../shared/classServices/articles.service';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent implements OnInit {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  articles: Article[] = [];
  article!: Article;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (Number(params.get('id')) <= this.articles.length) {
        this.article = this.articles.find(article => article.id === Number(params.get('id'))) as Article;
      } else {
        this.router.navigate(['**'])
      }
    })
  }


}
