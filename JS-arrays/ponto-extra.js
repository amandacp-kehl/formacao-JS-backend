/* DESAFIO: Um aluno recebeu um ponto extra nas suas notas, 
adicione esse ponto no array de notas*/

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 
? nota : ++nota);

// O map serve para nos retornar um array atualizado

console.log(notasAtualizadas);
