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
  getMoviesFromServicesObservable():void {
    this.movieService.getMoviesObservable().subscribe(updateMovie => {
        this.movies = updateMovie ;
    });
  }
  getMoviesFromHttpUrl(): void{
    this.movieService.getMovieUrl().subscribe(response => {
      this.movies = response ;
    });
  }

  ngOnInit(): void {
    //this.getMoviesFromServices();
    //this.getMoviesFromServicesObservable();
    this.getMoviesFromHttpUrl();
  }
  add(name: string , releaseYear: string):void {
    name = name.trim();
    if(Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0 ){
        alert('Name must not be blank , Release year must be a number');
        return ;
    }
    const newMovie: Movie = new Movie;
    newMovie.name = name ;
    newMovie.releaseYear = Number(releaseYear);
    this.movieService.addMovie(newMovie).subscribe(response => {
      this.movies.push(response);
      //console.log(`ResponseMovies = ${JSON.stringify(this.movies)}`);
    });
  }
  delete(movieId:number):void{
    this.movieService.deleteMovie(movieId).subscribe(response =>{
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== movieId);
    });
  }
  // Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movieClick:Movie): void{
    this.selectedMovie = movieClick ;
    //console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
