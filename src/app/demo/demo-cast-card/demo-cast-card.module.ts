
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CastCardModule } from 'tmdb-movie';
import { DemoCastCardComponent } from './demo-cast-card.component';
import { DemoCastCardRoutingModule } from './demo-cast-card-routing.module';

@NgModule({
  imports: [
    CommonModule,DemoCastCardRoutingModule,CastCardModule
  ],
  declarations: [DemoCastCardComponent], 
})
export class DemoCastCardModule { }
