/* DESAFIO - Médias das turmas - Com  a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

- const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
- const salaJava = [6, 5, 8, 9, 5, 6];
- const salaPython = [7. 3.5, 8, 9.5]; */

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

/* vamos criar a função para não termos que ficar repetindo código 3 x para calcular as médias */

function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length                                 // esse método itera, faz um loop no array e reduz todo o array a um único valor e nos retorna ele 
}

console.log (`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log (`Média da sala de Java ${mediaSala(salaJava)}`);
console.log (`Média da sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length;

console.log(media.toFixed(1));

