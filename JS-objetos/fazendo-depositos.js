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

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);