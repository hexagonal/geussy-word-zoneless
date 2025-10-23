import { Component, inject } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'gw-solution',
  templateUrl: './solution.html',
  styleUrl: './solution.css'
})
export class Solution {
  #game = inject(Game);

  readonly solution = this.#game.solution;
}
