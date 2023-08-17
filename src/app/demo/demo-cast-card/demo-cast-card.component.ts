import { Component, OnInit } from '@angular/core'; 
import { Observable, map, tap } from 'rxjs';
import { MovieService } from 'tmdb-movie';

@Component({
  selector: 'demo-cast-card',
  templateUrl: './demo-cast-card.component.html',
  styleUrls: ['./demo-cast-card.component.scss'],
})
export class DemoCastCardComponent implements OnInit {
  private readonly movieId = '569094';
  cast$:Observable<any> = this.movieService.credits(this.movieId).pipe(map((cast:any)=>cast.cast),tap((c)=>console.log(c)))
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

}
