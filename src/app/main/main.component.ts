import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '@tmdb-movie/services/discover/discover.service';
import { GenreService } from '@tmdb-movie/services/genre/genre.service'; 
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  movieList$:Observable<any> =this.genreService
  .getGenreMovie()
  .pipe(
    switchMap((res) => {
      return this.getMovieWithGenre(res);
    }),
    map((result:any)=>result.results)
  );
  constructor(
    private discoverService: DiscoverService,
    private genreService: GenreService
  ) {}

  ngOnInit() {
    console.log('loaded')
  }
  private getMovieWithGenre(genres: any): Observable<any> {
    return this.discoverService.getDiscoverMovie().pipe(
      map((result:any) => { 
        const newResult = {...result};
        newResult.results = newResult.results.map((res:any)=>{
            const newMovie = {...res};
            newMovie['genres'] = newMovie.genre_ids.map((g:number)=>genres.find((x:any)=>x.id === g).name);
            return newMovie;
        })
        return newResult;
      })
    );
  }
}
