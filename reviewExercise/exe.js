/*EXERCISE 1
Creamos una función que tomará como parámetros un número y un array de números.
La función va a devolver el número de veces que está repetido ese número en el array.

Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5], la función devolverá un 2,
porque el número 1 aparece dos veces en el array.*/

var number = 1;
var arrayDeNumbers = [1, 3, 4, 2, 1, 3, 4, 5];

function cuentaNumeros(numbers, arrayDeNumbers) {
    var repeatnumber = 0;
    for (var i = 0; i < arrayDeNumbers.length; i++) {
        if (number === arrayDeNumbers[i]) {
            repeatnumber = repeatnumber + number;
        }
    }
    return repeatnumber;
}
cuentaNumeros(number, arrayDeNumbers);

/*EXERCISE 2:
Vamos a crear una función JavaScript que toma un parámetro que es una cadena (texto).
Si la cadena es de longitud impar, devuelve el caracter central.
Si la longitud de la cadena es par, devuelve "Solo funciono con cadenas de longitud impar".*/


function caracterCentral(string){
    var emptytstring = string.length === 0;
    var esPar = string.length % 2 === 0;

    if (emptytstring){
        return "la cadena no puede estar vacia";
    }else if (esPar) {
        return "Solo funciono con longitud impar";
    } else {
      var index = (string.length -1)/2;
      // var middle = Math.floor(string.length / 2);
      return string[index];
    }
}

var string = "abCde";
var string1 = "abcd";

console.log("El caracer central de " + string + "es " + caracterCentral(string));
console.log("El caracer central de " + string1 + "es " + caracterCentral(string1));


/*EXERCISE 3:
Vamos a crear una función que toma un parámetro que es un array de números.
La función va a devolver un array que contiene sólo los números pares del array original.*/

encuentraPares([1, 3, 5, 6, 7, 9]);

function encuentraPares(numeros) {
    var par = [];
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] / 2 === 0) {
            par[par.length] = numeros[i]
        }
    }
    return par
