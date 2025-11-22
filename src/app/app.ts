import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DnaInput } from './components/dna-input/dna-input';

@Component({
  selector: 'app-root',
  imports: [ DnaInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('detector-mutantes');
}
