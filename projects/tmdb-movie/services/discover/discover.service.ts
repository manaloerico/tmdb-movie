import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  constructor(private http:HttpClient){}
  private readonly apiUrl = 'https://api.themoviedb.org/3/discover/movie';

  getDiscoverMovie(include_adult:boolean = false,include_video:boolean = false,language:string='en-US',page:number=1,sort_by:string='popularity.desc'):any{
    return this.http.get<any>(`${this.apiUrl}?
    include_adult=${include_adult}&include_video=${include_video}&language=${language}&page=${page}&sort_by=${sort_by}
    `)
  }

}
