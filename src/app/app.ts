import { Component, inject, OnInit } from '@angular/core';
import { Guesses } from './guesses/guesses';
import { NewGame } from './new-game/new-game';
import { Solution } from './solution/solution';
import { Game } from './game';

@Component({
  selector: 'gw-app',
  imports: [
    Solution,
    Guesses,
    NewGame
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  #game = inject(Game);

  async ngOnInit() {
    await this.#game.new();
  }
}
