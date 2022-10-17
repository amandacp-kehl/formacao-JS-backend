/* DESAFIO:
Divida os alunos da sala baixo em duas listas com a mesma quantidade
de alunos:
*/
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Laura', 'Marjorie', 'Guilherme', 
'Aline, Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius',
'Renan', 'Renata', 'Daisy', 'Camilo'];
                // começa no 0 e para no 9
const sala1 = nomes.slice(0,nomes.length/2);
                // começa no 10 e vai até o final do array
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 01: ${sala1}`);
console.log(`Alunos da sala 02: ${sala2}`);

