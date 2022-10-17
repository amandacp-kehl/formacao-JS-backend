/* criar uma função que permita a criação de novos clientes a partir de um modelo, usando protótipos */

function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }

}

const andre = new Cliente    /* new é uma palavra reservada do JS que diz que, a partir da função, criaremos uma nova isntância  */

console.log(andre);