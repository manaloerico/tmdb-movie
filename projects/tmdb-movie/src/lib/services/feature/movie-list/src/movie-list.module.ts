import { NgModule } from '@angular/core';
import { MovieListService } from './movie-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from '../../../common/request-interceptor.service';

@NgModule({
  providers: [
    MovieListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
})
export class MovieListModule {}
