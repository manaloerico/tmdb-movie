import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';  
import { MovieCardModule, TmdbMovieModule } from 'tmdb-movie'; 

@NgModule({
  declarations: [	
    AppComponent,
      MainComponent
   ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    TmdbMovieModule,
    MovieCardModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
