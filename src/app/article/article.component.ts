import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


interface Article{
  title : string,
  author: string,
  content : string,
  image : string
  isPublished :boolean,
  comment: string
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})



export class ArticleComponent {

  article : Article = {
    title : `titre de l'article`,
    author: `john doe`,
    content:`le contenu de l'article`,
    image:`https://via.placeholder.com/350x150`,
    isPublished: false,
    comment:''
  }

  togglePublication():void{
    this.article.isPublished = !this.article.isPublished;
    console.log(this.article.isPublished);
  }
}
