import { Component, Directive } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './composants/home-page/home-page.component';
import { ArticleDetailsComponent } from './composants/article-details/article-details.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignUpFormsComponent } from './forms/sign-up-forms/sign-up-forms.component';
import { ExerciceDirectivesComponent } from './composants/exercice-directives/exercice-directives.component';
import { RegisterComponent } from './forms/register/register.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: 'article/:id', component: ArticleDetailsComponent },
    {path:'directives',component:ExerciceDirectivesComponent},
    { path: 'contact', component: ContactFormComponent },
    {path:'register',component:RegisterComponent},
    {path:'signup',component:SignUpFormsComponent},
    { path: '**', component: NotFoundComponent }
];
