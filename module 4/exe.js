/*Exercise1:
Desarrolla una función que puntúe una mano de cartas,
que tenga como parámetro un array de cartas,
cada una representada por un diccionario con palo y valor.

Al puntuar, las cartas suman su valor excepto si es un as que suma 20.

Prueba a invocarla con varias manos de cartas con y sin ases*/

function scoreHand(hand){
  var total = 0;
  for (var i=0; i<=hand.length; i=i+1){
    var value = hand[i].number;
    if (hand[i].number === 1){
      value = 40;
    }
    total = total + value;
  }
  console.log("score is:" + total);
}

var handOne = [{number:7, suit:"Diamonds"},{number:9, suit:"Hearts"}];
var handTwo = [{number:6, suit:"Spades"},{number:1, suit:"Diamonds"}];

scoreHand(handOne);
scoreHand(handTwo);

/*Exercise 2:
Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble.
Prueba a invocarla con varias manos de cartas.*/
//
// function scoreHand(hand){
//   var total = 0;
//   for (var i=0; i<=hand.length; i=i+1){
//     var value = hand[i].number;
//     if (hand[i].number === 1){
//       value = 20;
//     }
//     if (hand[i].suit === "Hearts" && hand[i].suit === "Diamonds"){
//       value = value * 2;
//     }
//     total = total + value;
//   }
//   console.log("Score is: " + total);
// }

function scoreHand(hand){
  var total = 0;
  for (var i=0; i<=hand.length; i=i+1){
    var value = hand[i].number;
    if (hand[i].number === 1){
      value = 20;
    }
    if (hand[i].suit === "Hearts" || hand[i].suit === "Diamonds"){
      value = value * 2;
    }
    total = total + value;
  }
  console.log("Score is: " + total);
}

/*Exercise 3:
Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores
 imprima por consola al ganador, es decir, al que obtenga mayor puntuación.*/
