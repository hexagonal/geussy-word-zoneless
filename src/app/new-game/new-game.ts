import { Component, inject } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'gw-new-game',
  templateUrl: './new-game.html',
  styleUrl: './new-game.css'
})
export class NewGame {
  #game = inject(Game);

  newGame() {
    this.#game.new();
  }
}
