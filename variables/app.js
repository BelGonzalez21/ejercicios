//Ejercicio 0
let nombre;
let apellido;

nombre = window.prompt("¿Cual es tu nombre?");
console.log(nombre);
alert("Hola" + " " + nombre);

apellido= window.prompt("¿Cual es tu apellido?");
console.log(apellido);
console.log("Hola" + " " + nombre + " " + apellido);

//Ejercicio 1
let num1;
let num2;
let resultado;

num1 = window.prompt("Ingrese un numero");
num2 = window.prompt("Ingrese otro numero");
resultado = parseInt (num1) + parseInt (num2);
console.log("El resultado es: " + resultado);

//Ejercicio 2
let edad;
let nacimiento;

edad = window.prompt("Ingrese su edad");
nacimiento = 2021 - parseInt(edad);
console.log("Tu año de nacimiento es: " + nacimiento);

//Ejercicio 3 
let numeroDeCuenta;
let nuevoBalance;

numeroDeCuenta = 1000000
nuevoBalance = window.prompt("Cuanto desea retirar");
numeroDeCuenta = numeroDeCuenta - parseInt(nuevoBalance);
console.log("Tu saldo restante es " + numeroDeCuenta);

//Ejercicio 4
let nota1;
let nota2;
let nota3;
let promedio;

nota1 = window.prompt("Ingrese una nota");
nota2 = window.prompt("Ingrese una nota");
nota3 = window.prompt("Ingrese una nota");
promedio = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
promedio = promedio / 3;
console.log("Tu promedio es de: " + promedio);

//Ejercicio 5
let metros;
let pies;
let cm;
let pulgadas;

//Ejercicio 6
let numero1;
let numero2;
let numero3;
let resultadoSuma;
let resultadoFinal;

numero1 = window.prompt("Ingrese un numero");
numero2 = window.prompt("Ingrese otro numero");
resultadoSuma = parseInt(numero1) + parseInt(numero2);
console.log("El resultado de la suma es: " + resultadoSuma);
numero3 = window.prompt("Ingrese un tercer numero");
resultadoFinal = resultadoSuma * parseInt(numero3);
console.log("El resultado final es: " + resultadoFinal);

//Ejercicio 7
let minutos;
let segundos;

minutos = window.prompt("Ingrese la cantidad de minutos que desea convertir");
segundos = parseInt(minutos) * 60;
alert(minutos + " minutos es equivalente a " + segundos + " segundos") ;

//Ejercicio 8
let baseRectangulo;
let alturaRectangulo;
let areaRectangulo;

baseRectangulo = window.prompt("Ingrese la base del rectangulo");
alturaRectangulo = window.prompt("Ingrese la altura del rectangulo");
areaRectangulo = parseInt(baseRectangulo) * parseInt(alturaRectangulo);
console.log("El area del rectangulo es " + areaRectangulo);

//Ejercicio 9
let baseTriangulo;
let alturaTriangulo;
let areaTriangulo;

baseTriangulo = window.prompt("Ingrese la base del triangulo");
alturaTriangulo = window.prompt("Ingrese la altura del triangulo");
areaTriangulo = (parseFloat(baseTriangulo) * parseFloat(alturaTriangulo)) / 2;
console.log("El area del triangulo es " + areaTriangulo);


//Ejercicio 10
let monto;
let descuento;
let montoFinal;

monto = window.prompt("Ingrese el monto del producto");
descuento = window.prompt("Ingrese el descuento");
descuento = parseFloat(descuento) / 100;
descuento = 1 - parseFloat(descuento);
montoFinal = parseFloat(monto) * parseFloat(descuento);
console.log("El precio final con el descuento es de: " + parseFloat(montoFinal));

//Ejercicio 11
let nombreUsuario;
let edadUsuario;
let nacimientoUsuario;

nombreUsuario = window.prompt("Ingrese su nombre");
edadUsuario = window.prompt("Ingrese su edad");
nacimientoUsuario = 2021 - parseInt(edadUsuario);
alert("Hola " + nombreUsuario + " usted nacio en " + nacimientoUsuario);

//Ejercicio 12
let conversorNombre;
let temperatura;
let temperaturaFarenheit;
conversorNombre = window.prompt("Ingrese su nombre");
temperatura = window.prompt("Ingrese la temperatura en °C");
temperaturaFarenheit = parseFloat(temperatura) * 1.8 + 32;
console.log("Hola " + conversorNombre + ", " + temperatura + "°C equivalen a " + temperaturaFarenheit + "°F");

//Ejercicio 13
let conversorN; 
let temperaturaC;
let temperaturaF;
conversorN = window.prompt("Ingrese su nombre");
temperaturaF = window.prompt("Ingrese la temperatura en °F");
temperaturaC = (temperaturaF - 32) / 1.8;
console.log("Hola " + conversorN + ", " + temperaturaF + "ºF equivalen a " + parseFloat(temperaturaC) + "ºC");

//Ejercicio 14
let Numm1;
let resultadoo;

Numm1 = window.prompt("Ingrese un numero:");
resultadoo = ((Numm1 + 5) * 10) % 3;
console.log("El resultado es: " + resultadoo); 

//BONUS 
//Ejercicio 0
let numeroBonus1;
let numeroBonus2;
let resultadoBonus;

numeroBonus1 = window.prompt("Ingrese un numero");
numeroBonus2 = window.prompt("Ingrese otro numero");
resultadoBonus = numeroBonus1 + numeroBonus2;
console.log("El resultado es: " + resultadoBonus);

//Ejercicio 1
let dias;
let años;
let sDias;
let sAños;

años = window.prompt("Ingrese la cantidad de años que desea pasar a segundos ");
dias = window.prompt("Ingrese la cantidad de dias que de sea pasar a segundos");
sAños = parseInt(años) * 31540000;
sDias = parseInt(dias) * 86400;
console.log(años + " años equivalen a " + sAños + " segundos");
console.log(dias + " dias equivalen a " + sDias + " segundos");

//Ejercicio 2
let kmRecorrer;
let velocidad;
let tiempo;

kmRecorrer = window.prompt("Ingrese la cantidad de kilometros que desea recorrer: ");
velocidad = window.prompt("Ingrese la velocidad a la que desea ir en m/s: ");
velocidad = parseFloat(velocidad) * 3.6;
tiempo = parseFloat(kmRecorrer) / parseFloat(velocidad);
console.log("Se tardara en recorrer el trayecto " + parseFloat(tiempo) + " horas");

//BONUS 3
let sueldoBruto;
let obraSocial;
let jubilacion;
let ley;
let sueldoNeto;

sueldoBruto = window.prompt("Ingrese sueldo bruto: ");
obraSocial = parseFloat(sueldoBruto) * 0.03;
jubilacion = parseFloat(sueldoBruto) * 0.11;
ley = parseFloat(sueldoBruto) * 0.03;
sueldoNeto = parseFloat(sueldoBruto) - (parseFloat(sueldoBruto) * 0.17);
console.log("Sueldo bruto: " + parseFloat(sueldoBruto));
console.log("Obra social: " + parseFloat(obraSocial));
console.log("Jubilacion: " + parseFloat(jubilacion));
console.log("Ley 19032: " + parseFloat(ley));
console.log("Neto a pagar: " + parseFloat(sueldoNeto));