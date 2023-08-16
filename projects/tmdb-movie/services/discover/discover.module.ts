import { NgModule } from '@angular/core';
import { DiscoverService } from './discover.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';  
import { RequestInterceptorService } from '@tmdb-movie/lib/services/request-interceptor.service';

@NgModule({
  providers: [
    DiscoverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
})
export class DiscoverModule {}
