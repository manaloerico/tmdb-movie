import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';

  getGenreMovie(language: string = 'en'): any {
    return this.http.get<any>(`${this.apiUrl}?language=${language}
    `).pipe(map((result)=>result.genres));
  }
}
