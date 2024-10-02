import { Component, Directive } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignUpFormsComponent } from './forms/sign-up-forms/sign-up-forms.component';
import { ExerciceDirectivesComponent } from './exercice-directives/exercice-directives.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: 'article/:id', component: ArticleDetailsComponent },
    {path:'directives',component:ExerciceDirectivesComponent},
    { path: 'contact', component: ContactFormComponent },
    {path:'register',component:SignUpFormsComponent},
    { path: '**', component: NotFoundComponent }
];
