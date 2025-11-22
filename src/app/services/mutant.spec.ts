
import { TestBed } from '@angular/core/testing';
import { MutantService } from './mutant';
import 'zone.js/testing';

describe('MutantService', () => {
  let service: MutantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantService);
  });

  it('debería detectar mutante (ejemplo del enunciado)', () => {
    const dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
    expect(service.isMutant(dna)).toBeTrue();
  });

  it('debería detectar mutante por secuencia horizontal', () => {
    const dna = [
      "AAAA",
      "TGCT",
      "CGTA",
      "TACG"
    ];
    expect(service.isMutant(dna)).toBeTrue();
  });

  it('debería detectar mutante por secuencia vertical', () => {
    const dna = [
      "ATGC",
      "ATGC",
      "ATGA",
      "ATGT"
    ];
    expect(service.isMutant(dna)).toBeTrue();
  });

  it('debería detectar mutante por secuencia diagonal', () => {
    const dna = [
      "ATGC",
      "CAGT",
      "TCAT",
      "GTTG"
    ];
    // Diagonal principal: A-G-A-G
    expect(service.isMutant(dna)).toBeTrue();
  });

  it('debería devolver falso para humano', () => {
    const dna = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"];
    expect(service.isMutant(dna)).toBeFalse();
  });

  it('debería devolver falso para matriz 1x1', () => {
    const dna = ["A"];
    expect(service.isMutant(dna)).toBeFalse();
  });

  it('debería devolver falso para matriz 2x2', () => {
    const dna = ["AT","CG"];
    expect(service.isMutant(dna)).toBeFalse();
  });

  it('debería detectar mutante si hay más de una secuencia', () => {
    const dna = [
      "AAAAG",
      "CAGTG",
      "TTATG",
      "AGAAG",
      "CCCCT"
    ];
    expect(service.isMutant(dna)).toBeTrue();
  });

  it('debería lanzar error si no es NxN', () => {
    const dna = ["ATG","CAGT","TTA"];
    expect(() => service.isMutant(dna)).toThrowError('El ADN debe ser una matriz NxN.');
  });

  it('debería lanzar error por carácter inválido', () => {
    const dna = ["ATGCGA","CAGTGC","TTATXT","AGAAGG","CCCCTA","TCACTG"];
    expect(() => service.isMutant(dna)).toThrowError(/Caracter inválido/);
  });

  it('debería lanzar error si el array está vacío', () => {
    expect(() => service.isMutant([])).not.toThrow();
    expect(service.isMutant([])).toBeFalse();
  });
});
