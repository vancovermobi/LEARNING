import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Movie } from './Models/movie';
import { fakeMovies } from './movies/fake-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Services can get data from :
  // - Local storage
  // - mock data source
  getMovies():Movie[] {
    return fakeMovies ;
  }

  // su dung Observable async
  getMoviesObservable(): Observable<Movie[]> {
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of (fakeMovies) ;
  }
  getMovieFromId(id:number):Observable<Movie>{
    return of(fakeMovies.find(movie => movie.id === id ));
  }
  constructor(public messageService: MessageService) { }
}
