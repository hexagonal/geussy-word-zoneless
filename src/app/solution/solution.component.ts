import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'solution',
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'
})
export class SolutionComponent {
  #gameService = inject(GameService);

  readonly solution = this.#gameService.solution;
}
