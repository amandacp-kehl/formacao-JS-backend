const nome = ["Ana", "Ju", "Leo", "Paula"];

// para trabalhar com callbacks usamos o ForEach

nome.forEach(imprimeNomes); /* não podemos simplesmente passar o 
nome da array ou algun assim. Só funcionará se o parâmetro for uma
FUNÇÃO. Ela pode aceitar um segundo parâmetro também que será
o índice, esse segundo parâmetro é opcional enquanto o primeiro
é obrigatório */

function imprimeNomes (nome){
    console.log(nome);
}