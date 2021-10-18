// 1-
// a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
const frutas = [];

for(let i = 0; i < 5; i++){
    frutas[i] = prompt('Ingrese la fruta ' + i);
}
console.log(frutas);
// b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
const verduras = [];
let i = 0;
let continuar;

do{
    verduras[i] = prompt('Ingrese la verdura ' + i);
    continuar = confirm('¿Quiere ingresar otra verdura?');
    i++;
}while(continuar == true);
console.log(verduras);
// c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
const arrayFrutasVerduras = frutas.concat(verduras);
console.log(arrayFrutasVerduras);

const arrayVerdurasFrutas = verduras.concat(frutas);
console.log(arrayVerdurasFrutas);
// 2-Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.
const nombresCiudades = ['Buenos Aires', 'Rosario', 'Paris', 'Milan', 'Roma', 'Madrid', 'Nunez', 'Rio De Janeiro', 'Porto Alegre', 'Valencia'];

let numeroCiudades;

numeroCiudades = prompt('Ingrese un numero del 1 al 10');

console.log(nombresCiudades[numeroCiudades]);

// 3-Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
const nombresCiudades = ['Buenos Aires', 'Rosario', 'Paris', 'Milan', 'Roma', 'Madrid', 'Nunez', 'Rio De Janeiro', 'Porto Alegre', 'Valencia'];
let numero;

numero = prompt('Ingrese un numero');

for(let i = 0; i < numero; i++){
    nombresCiudades.shift();
}
console.log(nombresCiudades);

// Sacando los datos desde el final del array

const nombresCiudades = ['Buenos Aires', 'Rosario', 'Paris', 'Milan', 'Roma', 'Madrid', 'Nunez', 'Rio De Janeiro', 'Porto Alegre', 'Valencia'];
let numero;

numero = prompt('Ingrese un numero');

for(let i = 0; i < numero; i++){
    nombresCiudades.pop();
}
console.log(nombresCiudades);
// 4-Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
// a-Su longitud
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
console.log(artistasMusicales.length);
// b-El último elemento.
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
console.log(artistasMusicales[7]);
// c-Solo las posiciones pares
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
console.log(artistasMusicales[0], artistasMusicales[2], artistasMusicales[4], artistasMusicales[6]);
// d-todos los elementos
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
console.log(artistasMusicales);
// e-todos los elementos menos el último
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
artistasMusicales.pop();
console.log(artistasMusicales);
// f-Todos los elementos menos el primero
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
artistasMusicales.shift();
console.log(artistasMusicales);
// g-todos los elementos separados por “*”.
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
console.log(artistasMusicales.join('*'))
// h-Solicitar al usuario un nuevo artista para reemplazar al último ingresado.
const artistasMusicales = ['Mick Jagger', 'Keith Richards', 'John Lennon', 'Paul McCartney', 'Michael Jackson', 'Freddy Mercury', 'Frank Sinatra', 'Louis Armstrong'];
let nuevoArtista;
nuevoArtista = prompt('Ingrese un artista musical');
artistasMusicales.pop();
artistasMusicales.push(nuevoArtista);
console.log(artistasMusicales);
//5)  
// a-Crear un array de 8 posiciones con números enteros  y mostrar:
const numerosEnteros = ['10', '25', '2', '13', '7', '8', '5', '0'];
// b-Su longitud
console.log('La longitud del array es de ' + numerosEnteros.length);
// c-Solo las posiciones impares.
console.log('Posisiones Impares ' + numerosEnteros[1], numerosEnteros[3], numerosEnteros[5], numerosEnteros[7]);
// d-Solo los NUMEROS impares.
console.log('Numeros Impares ' + numerosEnteros[1], numerosEnteros[3], numerosEnteros[4], numerosEnteros[6]);
// e-El mayor de ellos
numerosEnteros.sort(function(a, b) {return b - a});
console.log(numerosEnteros[0]);
// f-Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)
console.log('Mitad del array ' + numerosEnteros[0], numerosEnteros[1], numerosEnteros[2], numerosEnteros[3]);
