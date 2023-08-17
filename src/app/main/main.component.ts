import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { DiscoverService, GenreService } from 'tmdb-movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  movieList$: Observable<any> = this.genreService.getGenreMovie().pipe(
    switchMap((res) => {
      return this.getMovieWithGenre(res);
    }),
    map((result: any) => result.results)
  );
  constructor(
    private discoverService: DiscoverService,
    private genreService: GenreService,
    private router: Router
  ) {}

  onCardClick(movie: any): void {
    this.router.navigate(['/movie', { id: `${movie.id}-${movie.original_title.toLowerCase().replace(/[^A-Z0-9]+/ig, "-")}` }]);
  }
  private getMovieWithGenre(genres: any): Observable<any> {
    return this.discoverService.getDiscoverMovie().pipe(
      map((result: any) => {
        const newResult = { ...result };
        newResult.results = newResult.results.map((res: any) => {
          const newMovie = { ...res };
          newMovie['genres'] = newMovie.genre_ids.map(
            (g: number) => genres.find((x: any) => x.id === g).name
          );
          return newMovie;
        });
        return newResult;
      })
    );
  }
}
