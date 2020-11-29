import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';
import { fakeMovies } from './fake-movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Start Wars',
    releaseYear: 1997
  };
  //movies = fakeMovies ;
  movies : Movie[] ;

  constructor( private movieService: MovieService) {}

  getMoviesFromServices():void {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit(): void {
    this.getMoviesFromServices();
  }

  // Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movieClick:Movie): void{
    this.selectedMovie = movieClick ;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
