import { Component, inject, input, linkedSignal } from '@angular/core';
import { Game, Letter } from '../game';

export type State = 'ready' | 'incorrect' | 'correct';

@Component({
  selector: 'gw-guess',
  templateUrl: './guess.html',
  styleUrl: './guess.css'
})
export class Guess {
  #game = inject(Game);
  readonly #word = this.#game.word;

  readonly letter = input.required<Letter>();

  readonly state = linkedSignal<string, State>({
    source: this.#word,
    computation: () => 'ready'
  });

  guess() {
    let isCorrect = this.#game.guess(this.letter());
    this.state.set(isCorrect ? 'correct' : 'incorrect');
  }
}
