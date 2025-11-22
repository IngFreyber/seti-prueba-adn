import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MutantService {

  private readonly VALID_CHARS = new Set(['A','T','C','G']);

  isMutant(dna: string[]): boolean {
    if (!dna || dna.length === 0) return false;

    const n = dna.length;

    for (let i = 0; i < n; i++) {
      if (dna[i].length !== n) throw new Error('El ADN debe ser una matriz NxN.');
      for (const ch of dna[i]) {
        if (!this.VALID_CHARS.has(ch)) throw new Error('Caracter inválido en ADN: ' + ch);
      }
    }

    const matrix: string[][] = dna.map(r => r.split(''));

    // construir direcciones
    const dirs = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ];

    let sequences = 0;

    const checkFrom = (r: number, c: number, dr: number, dc: number): boolean => {
      const ch = matrix[r][c];
      let rr = r + dr;
      let cc = c + dc;
      let count = 1;
      while (rr >= 0 && rr < n && cc >= 0 && cc < n && matrix[rr][cc] === ch) {
        count++;
        if (count === 4) return true;
        rr += dr;
        cc += dc;
      }
      return false;
    };

    // recorrer cada celda y cada dirección
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        for (const [dr, dc] of dirs) {
          // compute max steps available
          const maxRowSteps = dr === 1 ? (n - r) : (dr === 0 ? n : r + 1);
          const maxColSteps = dc === 1 ? (n - c) : (dc === -1 ? (c + 1) : (dc === 0 ? n : c + 1));
          const maxSteps = Math.min(maxRowSteps, maxColSteps);
          if (maxSteps < 4) continue;

          if (checkFrom(r, c, dr, dc)) {
            sequences++;
            if (sequences > 1) return true;
          }
        }
      }
    }

    return false;
  }
}
