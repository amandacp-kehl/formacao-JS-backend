/* DESAFIO - Procurando na lista

- Crie uma função que recebe como argumento o nome de um aluno;
- Verifique se o aluno está presente na lista e retorne a média final
que se encontra no mesmo índice;
- Caso o nome do aluno não esteja na lista retorne uma mensagem indicando 
que o aluno não foi encontrado. */

const nomes = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [nomes, notas];

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) //busca o índice do nome do aluno
                //aqui colocamos o zero pois lista nomes está na posição 0 e aqui colocamos o 1 pois a lista de notas está nessa posição
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não cadastrado";
    }

}
console.log(exibeNomeENota('Ana'));
