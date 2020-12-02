import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movie$: Observable<Movie[]>;
  public searchedSubject = new Subject<string>();

  constructor(public movieService: MovieService) { }

  search(searchedString: string):void{
    console.log(`searchedString: ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }
  ngOnInit(): void {
    this.movie$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((keyword:string) => this.movieService.searchMovies(keyword))
    );
  }

}
