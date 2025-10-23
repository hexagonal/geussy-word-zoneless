import { Component, inject } from '@angular/core';
import { Guess } from './guess';
import { Game, Letter } from '../game';

@Component({
  selector: 'gw-guesses',
  imports: [Guess],
  templateUrl: './guesses.html',
  styleUrl: './guesses.css'
})
export class Guesses {
  #game = inject(Game);

  readonly alphabet: readonly Letter[] = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') as Letter[];
}
