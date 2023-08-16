import { NgModule } from '@angular/core';
import { GenreService } from './genre.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';   
import { RequestInterceptorService } from '@tmdb-movie/lib/services/request-interceptor.service';

@NgModule({
  providers: [
    GenreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
})
export class GenreModule {}
