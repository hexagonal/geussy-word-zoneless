import { Component, inject } from '@angular/core';
import { LetterComponent } from './letter.component';
import { GameService, Letter } from '../game.service';

@Component({
  selector: 'alphabet',
  imports: [LetterComponent],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.css'
})
export class AlphabetComponent {
  #gameService = inject(GameService);

  readonly alphabet: readonly Letter[] = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') as Letter[];
}
