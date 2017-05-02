/*EXERCISE 1
Creamos una función que tomará como parámetros un número y un array de números.
La función va a devolver el número de veces que está repetido ese número en el array.

Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5], la función devolverá un 2,
porque el número 1 aparece dos veces en el array.*/

var numero = ();
var arrayDeNumeros =[1,3,4,2,1,3,4,5];

function cuentaNumeros(numero, arrayDeNumeros){
  var numeroRepetido = 0;
  for (var i=0; i<arrayDeNumeros.length; i++){
    if(numero === arrayDeNumeros[i]){
      numeroRepetido= numeroRepetido + ();
    }
  }
  return numeroRepetido;
}
cuentaNumeros(1,4,5,6);

/*EXERCISE 2:
Vamos a crear una función JavaScript que toma un parámetro que es una cadena (texto).
Si la cadena es de longitud impar, devuelve el caracter central.
Si la longitud de la cadena es par, devuelve "Solo funciono con cadenas de longitud impar".*/

var cadenaImpar= 1.5
function caracterCentral(cadena){
  var cadenaCentral = cadena.length/cadenaImpar;
  if (cadena.length/2===0){
    return"Solo funciono con longitud impar"
  } else {
    return cadena[cadenaImpar];
  }
}
caracterCentral("soyUnaCadenaImpar")

/*EXERCISE 3:
Vamos a crear una función que toma un parámetro que es un array de números.
La función va a devolver un array que contiene sólo los números pares del array original.*/

encuentraPares([1,3,5,6,7,9]);

function encuentraPares(numeros){
  var par =[];
  for (i=0; i<numeros.length; i++){
    if (numeros[i]/2===0) {
      par[par.length]=numeros[i]
    }
  }
  return par
