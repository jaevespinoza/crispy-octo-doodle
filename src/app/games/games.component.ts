import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    Your games, {{ username }}
    <ul>
      @for(game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: 'Last of Us',
    },
    { id: 2, name: "Baldur's gate" },
  ];

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
