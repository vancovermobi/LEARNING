import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Movie } from './Models/movie';
import { fakeMovies } from './movies/fake-movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Services can get data from :
  // - Local storage
  // - mock data source

  public movieUrl = "http://localhost:3000/movies";
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
  getMovieUrl():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      tap(receivedMovies => JSON.stringify(receivedMovies)),
      catchError(error => of([]))
    );
  }
  // tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),

  constructor(public messageService: MessageService,
    public http:HttpClient) { }
}
