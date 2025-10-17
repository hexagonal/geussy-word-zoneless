import { Component, inject, input, linkedSignal } from '@angular/core';
import { GameService, Letter } from '../game.service';

export type State = 'ready' | 'incorrect' | 'correct';

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  #gameService = inject(GameService);
  readonly #word = this.#gameService.word;

  readonly letter = input.required<Letter>();

  readonly state = linkedSignal<string, State>({
    source: this.#word,
    computation: () => 'ready'
  });

  guess() {
    let isCorrect = this.#gameService.guess(this.letter());
    this.state.set(isCorrect ? 'correct' : 'incorrect');
  }
}
