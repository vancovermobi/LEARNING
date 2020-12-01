import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../Models/movie';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  @Input() movie: Movie;
  public id_movie: any [] ;
  public subcription: Subscription ;
  
  constructor(public router: Router,
    public activeRouter: ActivatedRoute ,
    public location: Location,
    public movieService: MovieService, ) {}

  ngOnInit(): void {
    this.subcription = this.activeRouter.params.subscribe(params => {
      this.id_movie = params['id'] ;
      console.log( this.id_movie );
    });
    this.getMovieFromRoute();
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  getMovieFromRoute():void {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    console.log( id );
    this.movieService.getMovieFromId(id).subscribe(response => {
      this.movie = response ;
      console.log( this.movie );
    });
  }
  Save(): void{
    this.movieService.UpdateMovie(this.movie).subscribe(() => this.goBack());
  }
  goBack():void {
    this.location.back();
  }
}
