/*Exercise 1:
Programa un ejemplo que almacene en un array todas las cartas de la baraja,
cada una representada con un diccionario que tenga un palo y un valor.*/

var suits = ["Hearts", "Diamonds", "Spades", "Treboles"];
var value = [1,2,3,4,5,6,7,8,9,10,11,12];
var desk = [];

for (var i=0; < suits.length; i++){
  for(var j=1; j<=13; j++){
    var card ={stick:suits[i], value: j};
}

/*Exercise 2:
2. Partiendo del array que has construido en el ejercicio anterior,
construye un algoritmo que filtre en un nuevo array sólo las cartas rojas,
y en otro array las cartas negras.*/

var suits = ["Hearts", "Diamonds", "Spades", "Treboles"];
var red = [];
for (k=0; k<cards.length; k++){
  if (cards[k].suits === "Hearts" || cards[k].stick=== "Diamonds"){
    red[red.length] = cards[k];
    console.log(red[(red.length)-1].value + " " + red[(red.length)-1].stick);
  }
}

var black = [];
for (l=0; l<cards.length; l++){
  if (cards[l].stick === "Treboles" || cards[l].stick === "Spades"){
    black = cards[l];
    console.log(black.value + " " + black.palo);
  }
}

/*Exercise3:
Partiendo del array que has construido en el ejercicio anterior,
construye un algoritmo que filtre en un nuevo array las cartas rojas y pares.
Luego imprime en la consola la última carta de ese nuevo array.*/

var red = [];
for (j=0; j<=47; j=j+1){
  if ((cards[j].stick === "Hearts" || cards[j].stick === "Diamonds") && cards[j].valuer% 2 === 0){
    red = cards[j];
    console.log(red.value + " " + red.stick);
  }
}

console.log("La última carta es " + red.valor + " de " + red.stick);
