import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import {
  CreditsResult,
  MovieDetails,
  MovieResults,
  RecommendationResults,
  SimilarResults,
  Video,
  VideoApiResults,
} from '../../../../interface/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl = 'https://api.themoviedb.org/3/movie/';

  details(
    movie_id: string,
    language: string = 'en-US'
  ): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(
        `${this.apiUrl}${movie_id}?language=${language}
  `
      )
      .pipe(map((result) => result));
  }

  similar(
    movie_id: string,
    language: string = 'en-US',
    page: number = 1
  ): Observable<MovieResults[]> {
    return this.http
      .get<SimilarResults>(
        `${this.apiUrl}${movie_id}/similar?language=${language}&page=${page}`
      )
      .pipe(map((result) => result.results));
  }
  recommendations(
    movie_id: string,
    language: string = 'en-US',
    page: number = 1
  ): Observable<MovieResults[]> {
    return this.http
      .get<RecommendationResults>(
        `${this.apiUrl}${movie_id}/recommendations?language=${language}&page=${page}`
      )
      .pipe(map((result) => result.results));
  }

  credits(
    movie_id: string,
    language: string = 'en-US'
  ): Observable<CreditsResult> {
    return this.http
      .get<CreditsResult>(
        `${this.apiUrl}${movie_id}/credits?language=${language}`
      )
      .pipe(map((result) => result));
  }

  videos(movie_id: string, language: string = 'en-US'): Observable<Video[]> {
    return this.http
      .get<VideoApiResults>(
        `${this.apiUrl}${movie_id}/credits?language=${language}`
      )
      .pipe(map((result) => result.results));
  }
}
