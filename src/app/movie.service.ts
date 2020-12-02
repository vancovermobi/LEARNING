import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Movie } from './Models/movie';
import { fakeMovies } from './movies/fake-movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { NONE_TYPE } from '@angular/compiler';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

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
    // return of(fakeMovies.find(movie => movie.id === id ));
    const url = `${this.movieUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(receivedMovies => JSON.stringify(receivedMovies)),
      catchError(error => of(new Movie()))
    );
  }
  getMovieUrl():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      tap(receivedMovies => JSON.stringify(receivedMovies)),
      catchError(error => of([]))
    );
  }
  // tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
  // tap((resmovie: Movie) => JSON.stringify(resmovie)),
  /** PUT : update the movie on the server */
  UpdateMovie(movie:Movie): Observable<any> {
    return this.http.put(`${this.movieUrl}/${movie.id}` , movie , httpOption).pipe(
      tap(updateMovies => JSON.stringify(updateMovies)),
      catchError(error => of([]))
    );
  }
  /** POST : add a new movie on the server */
  addMovie(newMovie: Movie):Observable<any>{
    return this.http.post<Movie>(this.movieUrl, newMovie , httpOption).pipe(
      tap((resmovie: Movie) => JSON.stringify(resmovie)),
      catchError(error => of([]))
    );
  }
  /** DELETE : Delete the movie on the server */
  deleteMovie(movieId:number):Observable<any>{
    const url = `${this.movieUrl}/${movieId}`;
    return this.http.delete<Movie>(url, httpOption).pipe(
      tap(response => response ),
      catchError(error => of(null))
    );
  }
  /** Search : search the movie on the server */
  searchMovies(keyword:string): Observable<any>{
    if(!keyword.trim()){
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.movieUrl}?name_like=${keyword}`).pipe(
      tap(response => JSON.stringify(response) ),
      catchError(error => of(null))
    );
  }
  constructor(public messageService: MessageService,
    public http:HttpClient) { }
}
