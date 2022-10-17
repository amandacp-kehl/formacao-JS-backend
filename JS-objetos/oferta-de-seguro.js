/* Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro */ 

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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); 
    if (propsClientes.includes("dependentes")) // o método includes sempre verifica de inclui aquele dado e retorna true ou false 
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }

}

//console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);