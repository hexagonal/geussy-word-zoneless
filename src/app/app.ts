import { Component, inject, OnInit } from '@angular/core';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { NewGameComponent } from './new-game/new-game.component';
import { SolutionComponent } from './solution/solution.component';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  imports: [
    SolutionComponent,
    AlphabetComponent,
    NewGameComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  #gameService = inject(GameService);

  async ngOnInit() {
    await this.#gameService.newGame();
  }
}
