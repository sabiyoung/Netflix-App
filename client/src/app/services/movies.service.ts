import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_KEY = "5451a658978e1ebf0c141418edf0b6e6";

  constructor(private api:ApiService) { }

  getMovies(){
    return this.api.get(`trending/all/week?api_key=5451a658978e1ebf0c141418edf0b6e6&language=en-US`);
    console.log("movies")
  }

}
