/*percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco . */

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
        },
        {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
        }
    ],

    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) { // let info dentro do cliente
    if (typeof cliente[info] === "object" || typeof cliente [info] === "function"){
        continue
    } else {
    relatorio  += `
    ${info} ==> ${cliente[info]}`
    }
}

console.log(relatorio); 