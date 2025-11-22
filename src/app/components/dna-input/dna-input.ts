import { Component } from '@angular/core';
import { MutantService } from '../../services/mutant';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dna-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './dna-input.html',
  styleUrls: ['./dna-input.scss'],
})
export class DnaInput {

  dnaControl = new FormControl('', [Validators.required]);

  result: 'mutante' | 'humano' | null = null;
  error: string | null = null;
  checking = false;

  constructor(private mutantService: MutantService) {}

  onCheck() {
    this.error = null;
    this.result = null;
    if (this.dnaControl.invalid) {
      this.error = 'Introduce la secuencia ADN (una fila por línea).';
      return;
    }

    const raw = this.dnaControl.value as string;
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

    try {
      this.checking = true;
      const isMutant = this.mutantService.isMutant(lines);
      this.result = isMutant ? 'mutante' : 'humano';
    } catch (err: any) {
      this.error = err.message || 'Error al validar ADN';
    } finally {
      this.checking = false;
    }
  }

  onFillExample() {
    const sample = ['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG'].join('\n');
    this.dnaControl.setValue(sample);
  }

  onClear() {
    this.dnaControl.setValue('');
    this.result = null;
    this.error = null;
  }
}
