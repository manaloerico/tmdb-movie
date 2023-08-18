import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NowPlayingResults,
  PopularResults,
  UpComingResults,
} from '../../../../interface/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl = 'https://api.themoviedb.org/3/movie/';

  nowPlaying(
    language: string = 'en-US',
    page: number = 1,
    region?: string
  ): Observable<NowPlayingResults> {
    let url = `${this.apiUrl}now_playing?language=${language}&page=${page}`;
    if (region) {
      url += `&region=${region}`;
    }
    return this.http.get<NowPlayingResults>(url);
  }

  popular(
    language: string = 'en-US',
    page: number = 1,
    region?: string
  ): Observable<PopularResults> {
    let url = `${this.apiUrl}popular?language=${language}&page=${page}`;
    if (region) {
      url += `&region=${region}`;
    }
    return this.http.get<PopularResults>(url);
  }

  topRated(
    language: string = 'en-US',
    page: number = 1,
    region?: string
  ): Observable<PopularResults> {
    let url = `${this.apiUrl}top_rated?language=${language}&page=${page}`;
    if (region) {
      url += `&region=${region}`;
    }
    return this.http.get<PopularResults>(url);
  }

  upComing(
    language: string = 'en-US',
    page: number = 1,
    region?: string
  ): Observable<UpComingResults> {
    let url = `${this.apiUrl}upcoming?language=${language}&page=${page}`;
    if (region) {
      url += `&region=${region}`;
    }
    return this.http.get<UpComingResults>(url);
  }
}
