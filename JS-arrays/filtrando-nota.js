/* DESAFIO - Filtrando por nota - Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre eles:
- "Ana", "Marcos", "Maria" e "Mauro";
- 7, 4.5, 8, 7.5; */

const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter ( ( _, indice ) => notas [indice] < 5)   //tudo que vai dentro dos parênteses são parâmetros do método filter
console.log (`reprovaods: ${reprovados}`)      /* o filter precisa que retornemos booleanos. Cada vez que o filter faz um loop no array de nomes, nós precisamos
                                                que ele pegue uma informação correspondente no array de notas. Para isso usaremos o parâmetro de índice */


