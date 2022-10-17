/* DESAFIO - Lista com 2 dimensões
Crie uma lista com os seguintes alunos e alunas:
- João, Juliana, Caio e Ana.

Crie uma lista com as seguintes médias:
- 10, 8, 7.5, 9

Crie uma lista com 2 dimensões com os nomes e as médias;
*/

const nomes = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [nomes, notas];
console.log(`${listaDeNotasEAlunos[0,0]}, sua média é ${listaDeNotasEAlunos [1][0]}`);