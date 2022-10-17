/* DESAFIO - Acessar Chaves: Consultar um objeto utilizadno uma lista de chaves relativas a informações de clientes gerada pelo
sistema e printar o resultado na tela*/

const cliente = {
    nome: "Amanda",
    idade: 36,
    cpf: "147852369",
    email: "andre@gmail.com"
}  // objeto

const chaves = ["nome", "idade", "cpf", "email"];

const chave = "nome";

console.log(cliente[chaves[0]]); // usamos a anotação de colchetes para pegar essa chave vinda de outro lugar 

chaves.forEach(info => console.log(cliente[info])); // forEach é um método de array do JS 

console.log (cliente["nome"]); // se você colocar um objeto que não existe não dará erro, apenas aparecerá: UNDEFINED;



