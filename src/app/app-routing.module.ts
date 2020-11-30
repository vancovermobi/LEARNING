import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { Movie } from '../app/Models/movie';

const routes: Routes = [
  { path: 'detail/:id',   component: MovieDetailsComponent },
  { path: 'message' , component: MessagesComponent},
  { path: 'dashboard' , component: DashboardComponent},
];

@NgModule({
  //declarations: [],
  imports: [
   // CommonModule
   RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
