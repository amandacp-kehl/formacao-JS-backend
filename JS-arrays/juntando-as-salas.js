/* DESAFIO - Juntando as salas
Haverá uma palestra sobre padrões de projetos
para as alunas das salas de JavaScript e Python. Junte
ambas as salas em uma única lista que exiba todas as alunas
*/

const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];

/* para juntarmos as duas listas fazemos uma concatenação. O concat não mexe na lista
original, por isso precisamos criar uma nova lista */
const salasUnificadas = salaDePython.concat(salaDeJavaScript);