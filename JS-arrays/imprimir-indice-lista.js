/* DESAFIO - For
imprima o índice e a lista com os seguintes números:
- 100, 200, 300, 400, 500, 600 */

const numeros = [100, 200, 300, 400, 500, 600];

 //  valor de controle,vamos ver se o I é menor que o tamanho da lista e vamos somar 1 nesse I toda vez que passarmos por ele
for (let i=0; i< numeros.length; i++ ){
    console.log(i, numeros[i]) //aqui vamos mostrar o valor do I e o índice na lista
}

/*
1) Criamos uma let e a chamamos de I como de padrão e demos para essa variável o valor de 0;
2) Estabelecemos uma comparação para ver se I é menor que o tamanho da const números, ou seja, menor do que 6;
3) ++ É um operador que aumenta em 1 o valor da variável I.

Esse for vai fazer o que estamos pedindo dentro do bloco a quantidade de vezes que passarmos que ele tem que fazer.
Esse laço de repetição vai acontecer enquanto o valor de I for menor do que 6.

console:
0 100
1 200
2 300
3 400
4 500
5 600

A últma coisa que o programa vai fazer antes de qualquer coisa é executar o i++, dando ao I o valor de 1, voltando para
checar se 1 é menor que 6 e assim por diante.


*/