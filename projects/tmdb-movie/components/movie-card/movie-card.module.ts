import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent],
})
export class MovieCardModule {}
