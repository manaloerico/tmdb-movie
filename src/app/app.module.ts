import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppMaterialModule } from './app-material/app-material.module'; 
import { TmdbMovieModule } from 'projects/tmdb-movie/src/lib/tmdb-movie.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardModule } from 'projects/tmdb-movie/components/movie-card/movie-card.module';

@NgModule({
  declarations: [	
    AppComponent,
      MainComponent
   ],
  imports: [
    HttpClientModule,
    TmdbMovieModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    MovieCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
