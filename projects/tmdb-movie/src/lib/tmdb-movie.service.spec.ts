import { TestBed } from '@angular/core/testing';

import { TmdbMovieService } from './tmdb-movie.service';

describe('TmdbMovieService', () => {
  let service: TmdbMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
