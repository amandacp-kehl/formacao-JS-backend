const cliente = {
    nome: "Amanda",
    idade: 36,
    cpf: "147852369",
    email: "andre@gmail.com",
    fones: ["147852369", "236547891"],
    dependentes: [{
        nome: "Sara", 
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }] 
}  // objeto


cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014"); //está acessando a chave dataNasc de cada um dos objetos e comparar. Se o valor 
                                                                                                       // foi igual ao pedido ele dará um retorno.

console.log(filhaMaisNova);                                                                       
console.log(filhaMaisNova[0].nome);

