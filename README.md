 Detector de Mutantes
Video funcionamiento de la aplicación: https://jam.dev/c/1e1edb3f-070e-424e-bf9e-83e39212fee9
Este proyecto es una aplicación Angular que detecta si una secuencia de ADN pertenece a un mutante, según el desafío técnico de SETI.

## Descripción

La app permite ingresar una matriz NxN de ADN (solo letras A, T, C, G) y determina si hay más de una secuencia de cuatro letras iguales en forma horizontal, vertical u oblicua. Si es así, el humano es mutante.

## Características
- Validación visual y lógica de la matriz NxN.
- Detección eficiente de secuencias mutantes en todas las direcciones.
- Interfaz moderna con Angular Material.
- Pruebas unitarias robustas.

## Ejemplo de uso

Secuencia mutante:
```
ATGCGA
CAGTGC
TTATGT
AGAAGG
CCCCTA
TCACTG
```
Resultado: **MUTANTE**

Secuencia humana:
```
ATGCGA
CAGTGC
TTATTT
AGACGG
GCGTCA
TCACTG
```
Resultado: **HUMANO**

## Instalación

1. Clona el repositorio:
	```
	git clone <url-del-repo>
	cd detector-mutantes
	```
2. Instala dependencias:
	```
	npm install
	```
3. Ejecuta la app:
	```
	npm start
	```
4. Abre en tu navegador: [http://localhost:4200](http://localhost:4200)

## Ejecutar pruebas

```bash
npm test
```

## Estructura principal
- `src/app/services/mutant.ts`: Lógica de detección mutante.
- `src/app/components/dna-input/`: Componente de entrada y validación de ADN.
- `src/app/services/mutant.spec.ts`: Pruebas unitarias del servicio.
