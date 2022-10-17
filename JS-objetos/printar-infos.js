/* DESAFIO - Printar infos - Acessar um objeto com informações de um cliente e exibir essas informações no console */

const cliente = {
    nome: "Amanda",
    idade: 36,
    cpf: "147852369",
    email: "andre@gmail.com"
}  // objeto

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. `); //através da notação de ponto nós entramos na chave e acessamos o valor desejado.
console.log(cliente.cpf.substring(0,3)); // retorna 147

