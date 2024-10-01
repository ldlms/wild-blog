import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignUpFormsComponent } from './forms/sign-up-forms/sign-up-forms.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: 'article/:id', component: ArticleDetailsComponent },
    { path: 'contact', component: ContactFormComponent },
    {path:'register',component:SignUpFormsComponent},
    { path: '**', component: NotFoundComponent }
];
