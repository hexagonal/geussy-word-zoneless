import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.css'
})
export class NewGameComponent {
  #gameService = inject(GameService);

  newGame() {
    this.#gameService.newGame();
  }
}
