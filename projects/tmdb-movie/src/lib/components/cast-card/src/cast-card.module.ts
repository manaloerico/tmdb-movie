import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CastCardComponent } from './cast-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,MatCardModule, MatButtonModule, MatIconModule
  ],
  declarations: [CastCardComponent],
  exports: [CastCardComponent],
})
export class CastCardModule { }
