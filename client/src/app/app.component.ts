import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import {map }from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  movies$ = this.moviesServices.getMovies().pipe(
    map((res : any) => res.results)
  )
  constructor(private moviesServices:MoviesService){}


}
