// // console.log("HOLA AMIG@")
// /*Primer ejercicio: Calcula:
// Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones,
// compruebe si es de corazones y además es el número 4.
// En caso afirmativo, lo imprimimos en la consola. Probamos el mismo programa con el 3 de corazones, y con el rey de corazones.
// ¿Qué sucede?*/
//
// var card = "4c";
// if (card[0] === "4" && card[1] === "c") {
//     console.log("It's card " + card);
// } else if (card[0] === "6" && card[1] === "p") {
//     console.log("It isn't card");
// }
//
// //ejercicio corregido:
// var targetNumber = "4";
// var targetSuit = "c";
//
// var target = {
//     number: '4',
//     suit: 'c',
// // };
// //
// // var card = "4c";
// // var suit = card[1];
// // var number = card[0];
// //
// // if (number === "3" && suit === "c") {
// //     console.log("It's 3c")
// // } else if (card[0] === "1" && card[1] === "3" && card[2] === "c") {
// //     console.log("It's a KindC")
// // } else if (card[0] === target.number && card[1] === targetSuit) {
// //     console.log("It's a 4c");
// // }
// // console.log("___________________________________________________");
// // // Segundo ejercicio:Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola.
// //
// // for (var i = 2017; i < 2050; i = i + 4) {
// //     console.log(i + " es un año bisiestro antes del 2050");
// // }
// // console.log("___________________________________________________");
// // //ejercicio corregido
// //
// // var lastYear = 2050;
// // var leapYear = 4;
// // for (var year = 2017; year <= lastYear; year = year + leapYear) {
// //     console.log("This year is Leapyear " + year);
// // }
// // console.log("___________________________________________________");
// // //Calcular los años bisiestros hasta 2050:otra manera de resolver el ejercicio
// // var leapYearInterval = 4;
// // var currentYear = 2017;
// // var lastYear = 2050;
// // var yearsSinceLastLeapYear = currentYear % leapYearInterval;
// // var yearsUntilNextYear = leapYearInterval - yearsSinceLastLeapYear;
// // var nextLeapYear = currentYear + yearsSinceLastLeapYear;
// // var result = "";
// //
// // for (var i = nextLeapYear; i < lastYear; i = i + leapYearInterval) {
// //     //console.log(i + " it's a Leapyear");aparecerá en la consola.
// //     result = result + i + " it's a Leapyear<br>"; //aparecerá en la pantalla.
// // }
// // var resultElement = document.getElementById("result")
// // resultElement.innerHTML = result;
// //
// // /*Tercer ejercicio:3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo.
// // Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.*/
// // console.log("___________________________________________________");
// // //var card = [1,2,3,4,5,6,7,8,9,10,11,12];
// // var suit = "pctd";
// //
// // for (var i = 1; i <= 12; i = i + 1) {
// //     console.log(i);
// // }
// //
// //
// // for (var oneSuit = 0; oneSuit < 4; oneSuit = oneSuit + 1) {
// //     for (var card = 1; card <= 12; card = card + 1) {
// //         console.log(card + suit[oneSuit]);
// //     }
// // }
// // //Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

function isMultipleOfThree (number) {
  return number % 3 === 0;
}
var result = "";
var suits = "pctd";
for (var i = 0; i < suits.length; i = i + 1) {
    for (var j = 1; j <= 12; j = j + 1) {
        if (suits[i] === "c" || suits[i] === "d") {
            if (isMultipleOfThree(j)){
                result = result + " " + j + suits[i];
                console.log(result);
            }
        }
    }
}
var resultElement = document.getElementById("result")
resultElement.innerHTML = result;
