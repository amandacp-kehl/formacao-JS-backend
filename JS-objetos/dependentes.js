/* Montar lista única com dependentes  */

const clientes = [
    {
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
    
        }],
    },
    {
        nome: "Juliana",
        cpf: "547896321",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }

] 

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);
console.table(listaDependentes);
