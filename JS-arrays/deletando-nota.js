/* DESAFIO - Deletando elementos

Um professor acidentalmente lançou 5 notas no sistema de um aluno: 10, 6, 8, 5.5 e 10. 
Para corrigir, remova a última nota e faça o cálculo da média correta. */

let notas = [10, 6, 8, 5.5, 10];
notas.pop(); //usamos o pop para remover o último item da lista e shift para remover o primeiro

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(media);
