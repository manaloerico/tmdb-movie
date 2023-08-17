import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl = 'https://api.themoviedb.org/3/movie/';

  details(movie_id: string, language: string = 'en-US'): any {
    return this.http
      .get<any>(
        `${this.apiUrl}${movie_id}?language=${language}
  `
      )
      .pipe(map((result) => result));
  }

  similar(movie_id: string, language: string = 'en-US', page: number = 1): any {
    return this.http
      .get<any>(
        `${this.apiUrl}${movie_id}/similar?language=${language}&page=${page}`
      )
      .pipe(map((result) => result.results));
  }
  recommendations(
    movie_id: string,
    language: string = 'en-US',
    page: number = 1
  ): any {
    return this.http
      .get<any>(
        `${this.apiUrl}${movie_id}/recommendations?language=${language}&page=${page}`
      )
      .pipe(map((result) => result.results));
  }

  credits(
    movie_id: string,
    language: string = 'en-US'
  ): any {
    return this.http
      .get<any>(
        `${this.apiUrl}${movie_id}/credits?language=${language}`
      )
      .pipe(map((result) => result));
  }

}
