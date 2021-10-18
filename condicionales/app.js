// Ejercicios con cadenas de textos:

// 1-Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
// let nombre = prompt(`Escribe tu nombre, por favor`)
// let a = `a`
// if (nombre.includes(a)){
//     alert(`Tu nombre incluye la letra "A"`);
// }else{
//     alert(`Tu nombre NO incluye la letra "A"`);
// }

// 2-Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
// let texto = prompt(`Escriba un texto`)
// alert(`Su texto en minúsculas se ve así: ${texto.toLowerCase()}\nSu texto en mayúsculas se ve así: ${texto.toUpperCase()}`)

// 3-Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
// let palabra = prompt(`Escriba una palabra`).toUpperCase();
// alert(`La primera letra de la palabra ingresada es: ${palabra.charAt(0)}`);

// 4-Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
// let frase = prompt(`Escriba una frase`)
// alert(`Su frase tiene ${frase.length} carácteres`)

// 5-Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
// let userNumber = prompt(`Ingrese un número`);
// alert(`El número ingresado contiene ${userNumber.length} dígitos`);

// 6-Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
// let userWord = prompt(`Escriba una palabra`).toUpperCase();
// alert(`Su palabra termina con la letra "${userWord.charAt(userWord.length-1)}"`);

// 7-Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
// let userText = prompt(`Escriba una frase por favor`)
// alert(`${userText.replaceAll(" " , "*")}`)

// 8-Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
// let letter = prompt(`Ingrese una letra`)
// let sentence = prompt(`Escriba una frase`)

// if (sentence.includes(letter)){
//     alert(`Su frase contiene la letra "${letter.toUpperCase}" que ingreso anteriormente`)
// }else{
//     alert(`Su frase NO contiene la letra "${letter.toUpperCase()}" que ingreso anteriormente`)
// }


// 9-Solicitar un texto y mostrarlo todo menos la primera letra.
// let text2 = prompt(`Escriba una frase`)
// alert(`Su frase sin la primer letra es: ${text2.slice(1)}`);//sin la primer letra, por que cuenta desde el indice 1 y la primer letra es indice 0

//ALTERNATIVA alert(`Su frase sin la primer letra es: ${text2.slice(2, -3)}`)// cuenta desde el indice 2 y saca (-3)los ultimos 3 caracteres que es -ega

// 10-Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
// let nombre2 = prompt(`Ingrese un nombre`);
// alert(`${nombre2.charAt(0).toUpperCase() + nombre2.slice(1).toLowerCase()}`);
