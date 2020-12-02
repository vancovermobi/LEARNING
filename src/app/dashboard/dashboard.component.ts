import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    //this.getMovies();
    this.getMoviesFromHttpUrl();
  }
  getMovies():void{
    this.movieService.getMoviesObservable().subscribe(response => {
      this.movies = response.slice(1,5);
    });
  }
  getMoviesFromHttpUrl(): void{
    this.movieService.getMovieUrl().subscribe(response => {
      this.movies = response.slice(1,5) ;
    });
  }

}
