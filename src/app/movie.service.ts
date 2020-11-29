import { Injectable } from '@angular/core';
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
  constructor() { }
}
