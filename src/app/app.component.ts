import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le wild blog de léo';


}
