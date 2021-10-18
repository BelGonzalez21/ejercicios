/*Ejercicios de funciones
Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).*/
function edadAñosPerro(a, b){
    return a * b
}
let edad = prompt('Ingrese su edad');
alert(edadAñosPerro(edad, 7));

/*Crear una función que reciba un nombre y devuelva un saludo.*/
function saludo(a){
    return `¡Hola ${nombre}!`
}
let nombre = prompt('Ingrese su nombre');
alert(saludo(nombre));
/*Crear una función que salude.*/
function saludar2() {
    alert('¡Holaa!');
}
let hola = saludar2();

/*Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).*/
let farenheit = prompt('Ingrese la temperatura en Farenheit');

function Farenheit(a) {
    let c = (a - 32) / 1.8;
    console.log(c);
}
Farenheit(farenheit);

let celsius = parseInt(prompt('Ingrese la temperatura en Celsius'));

function Celsius(a) {
    let d = (a * 1.8) + 32;
    console.log(d);
}
Celsius(celsius);

/*
 Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
6 → 6! = 720
4 → |4| = 4
-8 → |-8| = 8
50 → 100
11 → 22*/
let numero = parseInt(prompt('Ingresa un numero'));

function Factorial(a) {

    if (a >= 5 && a >= 10) {

        let i = 1;
        let i2 = 1;
        let factorial = 0;

        do {
            factorial = i * i2;
            i++;
            i2 = factorial;
        } while (i <= numero);
        alert(factorial);
    }else if (a < 5) {
        console.log(Math.abs(a))
    }else{
        let c = a * 2;
        alert(c);
    }
}

/*Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
(Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)*/
let edad;
let bebida;
let vuelto;

function Negocio(a, b, c){
    
    if(edad >=10 && bebida == 'agua'){
        alert('El agua sale $70');
        vuelto = prompt('¿Con cuanto va a pagar?');
        vuelto = parseInt(vuelto) - 70;
        alert('Su vuelto es de $' + vuelto);

    }else if(edad >=18 && bebida == 'cerveza'){
        alert('La cerveza sale $110');
        vuelto = prompt('¿Con cuanto va a pagar?');
        vuelto = parseInt(vuelto) - 110;
        alert('Su vuelto es de $' + vuelto);

    }else if(edad <18 && bebida == 'cerveza'){
        alert('Sos menor de edad');
    }
}
edad = prompt('Ingrese su edad');
bebida = prompt('¿Que desea tomar?');
Negocio(edad,bebida,vuelto);

/*Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.*/
/*let a= prompt(`ingrese una hora`); 
let b = prompt(`Ingrese minutos`); 
let c = prompt(`Ingrese segundos`);

function tiempo(a, b, c){
    let tiempo = a + b + c; 
    console.log(tiempo.getSeconds());
}
*/
function Reloj(a, b, c){
        alert(`Su tiempo convertido a segundos sería: ${tiempo} segundos`)
    }
let hora = prompt('Ingrese una hora') * 60 * 60;
let minutos = prompt('Ingrese minutos') * 60;
let segundos = prompt('Ingrese segundods');
let tiempo = hora + minutos + segundos
Reloj(hora, minutos, segundos);

// Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 
const notas = [];
var cantidadNotas;
var suma = 0;

(function () {

    cantidadNotas = prompt('¿Cuantas notas va a ingresar?');

    for (let i = 1; i <= cantidadNotas; i++) {
        notas[i] = prompt('Ingrese la nota ' + i);
        suma += parseInt(notas[i]);
    }
    alert('Las notas fueron cargadas con exito');
})();

function Promedio(a, b) {
    a = suma;
    return a / b;
}
alert(`El promedio de las notas es ${Promedio(suma, cantidadNotas)}`);

// Escribir una función para cobrar en caja. Agregando funciones que: 
// * Si no es cliente A, agregue el IVA. 
// * Se solicite un monto de descuento a aplicar, y lo aplique.
// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.
let clienteA = prompt('¿Usted es cliente A. Responda Si/No?');
let montoFijo = 1500000;
let montoDescuento;
let montoFinal;

(function(a){
    if(a == 'Si' || a == 'si'){
        montoDescuento = prompt('Ingrese un monto de descuento');
        montoFinal = montoFijo - parseInt(montoDescuento);
        alert(`El monto final a pagar es ${montoFinal}`);
        prompt('¿Con cuanto desea abonar?');
    }else if(a == 'No' || a == 'no'){
        montoDescuento = prompt('Ingrese un monto de descuento');
        montoFinal = montoFijo - parseInt(montoDescuento);
        montoFinal = montoFinal * 0.21
        alert(`El monto final a pagar es ${montoFinal}`);
        prompt('¿Cuanto desea abonar?');
    }
})(clienteA);
// Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
// Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
// Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto).
let moneda = prompt('Ingrese el tipo de moneda');
let monto = prompt('Ingrese el monto');
let pesoArg;

function convertidor(a, b){
    if( a == 'Dolar' || a == 'dolar'){
        pesoArg = b * 184
        alert(pesoArg);
    }else if(a == 'Euro' || a == 'euro'){
        pesoArg = b * 120

        alert(pesoArg);
    }else if(a == 'Real' || a == 'real'){
        pesoArg = b * 20
        alert(pesoArg);
    }else{
        alert('Solo se acepta Dolares, Euros, Reales');
    }
}convertidor(moneda, parseInt(monto));
function convertidorOtroParametros(){
    for(let i = 0; i < 2; i++){
        moneda = prompt('Ingrese el tipo de moneda');
        monto = prompt('Ingrese el monto');
        convertidor(moneda, parseInt(monto));
    }
}convertidorOtroParametros()

// Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
// Ejemplo: Paso por parámetro “4” a la función.
// Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.
(function(a){
    for(let i = 0; i <= a; i++){
        numerosIngresados[i] = prompt('Ingrese el numero ' + i);
        numerosTriplicados[i] = numerosIngresados[i] * 3
    }
    console.log(`Numeros ingresados ${numerosIngresados}`);
    console.log(`Numeros triplicados ${numerosTriplicados}`);
})(4);
// Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media (promedio de ambas), en ambos sistemas.
let temperaturaPromedio;
let farenheitCelsius = prompt('Ingrese que tipo de temperatura. 1 Farenheit o 2 Celsius');
let temperaturaMaxima = prompt('Ingrese la temperatura maxima del dia');
let temperaturaMinima = prompt('Ingrese la temperatura minima del dia');

(function(a){
    if(a == 1){
        temperaturaPromedio = parseInt(temperaturaMaxima) / parseInt(temperaturaMinima);
        alert(`La temperatura promedio es ${temperaturaPromedio}`);
    }
})(farenheitCelsius);
// Bonus!!

// Vamos a realizar una cotizadora de seguros! 
// * Como primer paso, vamos a solicitar al cliente los siguientes datos: Año de nacimiento, Nombre, sueldo bruto. 
// * En base a su año de nacimiento, vamos a calcular su edad. 
// * Luego, en base a su edad, seleccionar el plan que le corresponda:
// Hasta 18 años: Plan Niños ($4000)
// Hasta 30 años: Plan Joven. ($5200)
// Hasta 60 años: Plan Adulto ($6400)
// 60 en adelante: Plan Adultos Mayores. ($9700)
// * Luego en base al plan, mostrar el monto a pagar . 
// * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar el 20% del sueldo bruto!
// * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
// * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). El monto total del grupo familiar no debe superar el 30% del sueldo bruto.

// Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, dolar, real, yen).
