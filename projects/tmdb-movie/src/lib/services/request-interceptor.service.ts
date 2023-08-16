import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {
  private readonly access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA5ZmVlYzIzY2ZiMGY1NjM1MWViMDkzYzJhZmE4MyIsInN1YiI6IjY0ZGI1ZjdhZDEwMGI2MDBjNWQzMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._tgwHpdaJE4FtuvgPFPwElo0eB3-YOTOjHY0XFVkVzg';
  private readonly api_key='ea09feec23cfb0f56351eb093c2afa83';
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest:HttpRequest<any> = this.modifiedRequest(request);
    return next.handle(modifiedRequest)
  }
 private modifiedRequest(request: HttpRequest<any>): HttpRequest<any> {
    let headers:HttpHeaders =request.headers.set('accept','application/json');
    headers = request.headers.set('Authorization',`Bearer ${this.access_token}`);
    return request.clone({headers});
  }
}
