import { NgModule } from '@angular/core'; 
import { MovieService } from './movie.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from '../../../common/request-interceptor.service';

@NgModule({ 
  providers: [
    MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
})
export class MovieModule { }
