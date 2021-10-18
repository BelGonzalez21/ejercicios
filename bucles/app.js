//Ejercicios de bucles

//0) Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.
///////////////////////////
//1.Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10). 
for(var i = 1; i < 11; i++) {
    alert(i);
}
//no se tiene que declarar var afuera del for porque se lo puede definir en for si mismo.
// 2.Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
var numeros = parseInt(prompt(`Ingresar un numero`));
for(var i = 0; i < 5; i++ ){
    console.log(numeros + i);  
}
console.log(`La suma de sus numeros es: ${numeros+i}`);
// 3.Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
let numeroCantidad;
let suma = 0;

numeroCantidad = prompt('Ingrese la cantidad de numeros que desea sumar');

for( i = 1; i <= numeroCantidad; i++){
    let numero = prompt('Ingrese el numero ' + i);
    suma += parseInt(numero);
}
alert('El resultado de la suma es ' + suma);
// 4.Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
let numeros;
let continuar;
let suma = 0;
let i = 0;

do{
    numeros = prompt('Ingrese un numero');
    continuar = confirm('¿Quiere ingresar otro numero?');
    suma += parseInt(numeros);
    i++;
}while(continuar == true);
alert('La suma de los numeros es ' + suma);
// 5.Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
let suma=0;
let continuar;
let i=0;
do {
    let numero = prompt('Ingrese un numero');
    suma = parseInt(numero) + suma;
    continuar = confirm('¿Desea continuar?');
    i++;
} while (continuar == true)
alert('El promedio de los numeros ingresados es ' + suma/i);
// 6.Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 
let numeroUsuario;
numeroUsuario = prompt('Ingrese un numero');
for(let i = 1; i <= numeroUsuario; i++){
    alert(i + '\n');
}
// 7.Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros.
let primerNumero;
let segundoNumero;

primerNumero = prompt('Ingrese un numero');
segundoNumero = prompt('Ingrese otro numero mayor al anteriormente ingresado');

for(let i = primerNumero; i <= segundoNumero; i++){
    alert(i);
} 
// 8.Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
let cantidadDeNumeros;
let numeros = [];

cantidadDeNumeros = prompt('¿Cuantos numeros quiere ingresar?');

for(let i = 1; i <= cantidadDeNumeros; i++){
    numeros[i] = prompt('Ingrese el numero ' + i);
}
numeros.sort(function(a, b) {return b - a});
alert('El numero mayor ingresado es ' + numeros[0]);
// 9.Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
let numeros = [];
let cantidadDeNumeros;

cantidadDeNumeros = prompt('¿Cuantos numeros quiere ingresar?');

for(let i = 1; i <= cantidadDeNumeros; i++){
    numeros[i] = prompt('Ingrese el numero ' + i);
}
numeros.sort(function(a, b) {return a - b});
alert('El numero menor ingresado es ' + numeros[0]);
// 10.Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)
let numero;
let cadena = '';
numero = prompt('Ingrese un numero');
for(let i = 0; i < numero; i++){
    cadena += ('*');
}
alert(cadena);
// 11.Realizar un programa que pida la base y el exponente y calcule la potencia. 
let base;
let exponente; 
let potencia = 1;
base = prompt('Ingrese la base');
exponente = prompt('Ingrese el exponente');
for(let i = 0; i < exponente; i++){
    potencia = parseInt(potencia) * parseInt(base);
}
alert('La potencia es ' + potencia);
// 12.Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
function Ejercicio5(a) {
    if (a >= 5 && a <= 10) {
        let i = 1;
        let i2 = 1;
        let factorial = 0;
        do {
            factorial = i * i2;
            i++;
            i2 = factorial;
        } while (i <= numero);
        alert(factorial);
    } else if (a < 5) {
        console.log(Math.abs(a));
    } else {
        let c = a * 2;
        alert(c);
    }
}
let numero = parseInt(prompt('Ingresa un numero'));
Ejercicio5(numero);
// 13.Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
let numero = parseInt(prompt("Escribe un número"));
let resto = 0;
for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
        alert( i + " es divisor de su numero");
    } else {
    }
}
// 14.Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
// H
// O
// L
// A
let numero = parseInt(prompt("Ingrese un numero"));
let cadena = prompt("Ingrese una cadena de caracteres");
for (let i = 0; i < numero; i++){
    console.log(cadena[i])
} 
// 15.Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 
// 16.Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.
const listaSupermercado = [];
let cantidadProductos = prompt('Ingrese la cantidad de productos que desea anotar');

for(let i = 0; i <= cantidadProductos; i++){
    listaSupermercado[i] = prompt('Ingrese el producto ' + i);
}
alert(listaSupermercado);
// Bonus desafíos matemáticos !!

// 1.Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 
// 2.Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente. 
// 3.Realizar un programa que pida dos números y diga su máximo común divisor. 
// (notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo.
//  (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
//  (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).
// 4.Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
// Ingresa 1 > muestra 1 
// Ingresa 8 > muestra 8
// Ingresa 3 > Muestra 3
// ingresa 4 > Muestra 8
// Ingresa 9 > Muestra 18
// Ingresa 50 > Muestra 100
// Ingresa 7 > Muestra 21
// ingresa 10 > Muestra 30
// 5.Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo.
// 6.Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. */