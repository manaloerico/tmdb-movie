import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'; 
import { Genre, GenreResults } from '../../../../interface/movies.model';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}
  private readonly apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';

  getGenreMovie(language: string = 'en'): Observable<Genre[]> {
    return this.http.get<GenreResults>(`${this.apiUrl}?language=${language}
    `).pipe(map((result)=>result.genres));
  }
}
