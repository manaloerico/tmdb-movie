import { Component, Input } from '@angular/core';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss'],
})
export class CastCardComponent {
  @Input() data: any;
}
