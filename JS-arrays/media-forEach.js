const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach( nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media);

/* ForEach é um método novo de criar laços de repetições. É um tipo de função que chamamos de callback
pois o parâmetro dessa função não é um dado (string, numero, etc), o parâmetro que passaremos será 
uma outra função. 

É mais utilizada a sintaxe so arrow function mas também podemos usar funções normais.
O forEach faz o mesmo papel do FOR, mas ele automaticamente faz o loop na array sem precisamors passar
o [i].*/