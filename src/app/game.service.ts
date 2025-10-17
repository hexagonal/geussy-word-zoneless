import { Injectable, inject, linkedSignal, signal } from '@angular/core';
import { GameRepoService } from './game-repo.service';

export type Letter =
  'A' | 'B' | 'C' | 'D' | 'E' | 'F' |
  'G' | 'H' | 'I' | 'J' | 'K' | 'L' |
  'M' | 'N' | 'O' | 'P' | 'Q' | 'R' |
  'S' | 'T' | 'U' | 'V' | 'W' | 'X' |
  'Y' | 'Z'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  #repo = inject(GameRepoService);
  #word = signal<string>("QWERTY");
  readonly word = this.#word.asReadonly();

  #solution = linkedSignal<string, (Letter | null)[]>({
    source: this.#word,
    computation: () => Array(this.#word().length).fill(null)
  });
  
  readonly solution = this.#solution.asReadonly();

  async newGame() {
    const word = await this.#repo.getWord();
    this.#word.set(word);
  }

  /** Guess a letter.
   * @returns is the letter correct?
   */
  guess(letter: Letter): boolean {
    const word = this.#word();
    
    const indexes = [] as number[];
    for (let i = 0; i < word.length; i++)
      if (word[i] === letter)
        indexes.push(i);

    const isCorrect = indexes.length > 0;

    if (isCorrect)
      this.#solution.update(value => value.map(
        (x, i) => indexes.includes(i) ? letter : x));

    return isCorrect;
  };
}
