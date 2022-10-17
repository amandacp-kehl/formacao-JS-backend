/* DESAFIO - Atualizando Elementos

Crie uma lista de chamada com os seguintes alunos:
- 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

Porém, a Ana e o caio mudaram de escola e o Rodrigo entrou 
nessa sala. Atualize a lista.
*/ 

var chamadaAlunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//adicionando um novo elemento ao array:
var adicionarRodrigo = chamadaAlunos.push('Rodrigo');

//removendo elementos do array pela posição do índice:
var removerAnaECaio = chamadaAlunos.splice(1, 2);

/*adicionando e removendo ao mesmo tempo:

var chamadaAlunos = chamadaAlunos.splice(1,2,"Rodrigo") */


console.log(chamadaAlunos);
