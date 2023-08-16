import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestInterceptorService } from './services/request-interceptor.service';

@NgModule({
  declarations: [],
  imports: [],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:RequestInterceptorService,
    multi:true
  }]
})
export class TmdbMovieModule {}
