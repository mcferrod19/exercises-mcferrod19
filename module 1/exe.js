// console.log("HOLA AMIG@")

/*Primer ejercicio: Calcula:
    1.Los años bisiestos que habrá antes de 2050
    2.Cuántas cartas con número par y negras hay en una baraja de poker*/

//1.Los años bisiestos que habrá antes de 2050

var year = 2050 - 2016;
console.log(year);
var x4 = 4;
var resultado = year / x4;
console.log(resultado);
console.log("Los años bisiestos que habrá antes del 2050 serán " + resultado);

//Corrected exercise 1.Los años bisiestos que habrá antes de 2050:

var leapYearInterval = 4;
var startingYear = 2017;
var targetYear = 2050;
var yearBeforeTargetYear = targetYear - 1;

var yearInterval = yearBeforeTargetYear - startingYear;
var remainingYears = yearInterval % leapYearInterval;
var result = (yearInterval - remainingYears) / leapYearInterval;

console.log("The leap years that will be before 2050 will be" + result);

//2.Cuántas cartas con número par y negras hay en una baraja de poker

var poker = 52;
var pokernegras = poker / 2;
var resultado = pokernegras;
console.log("Las cartas negras en una baraja de poker son " + resultado);
var pares = resultado / 2;
console.log("Las cartas pares negras en una baraja de negras son " + pares);

//Corrected exercise 2.Cuántas cartas con número par y negras hay en una baraja de poker

var totalCards = 55;
var jokerCards = 3;
var sticks = 4;
var blackSticks = 2;
var cardsPerStick = (totalCards - jokerCards) / sticks;
var figuresPerStick = 3;

var cardsWithNumbersPerSicks = cardsPerStick - figuresPerStick;
var evenCardsPerStick = cardsWithNumbersPerSicks / 2;
var result = evenCardsPerStick * blackSticks;

console.log("The black pair cards in a deck of poker are " + result);

/*Segundo ejercicio: 2. Define una variable cuyo valor sea una cadena que represente una carta de la baraja.
Recuerda que representamos las cartas con una cadena formada por un número que representa el valor, seguido de una letra que representa el palo.
Ahora crea otras dos variables que representan a la carta anterior y a las carta posterior en una baraja ordenada.
Finalmente, crea una última variable que concatene las cadenas de las 3 cartas anteriores usando las variables que ya tienes.*/

var card = "3p";
var number = card[0];
var suit = card[1]
var previousCardNumber = number - 1;
var previousCard = previousCardNumber + suit;
console.log("The previous card to 3p is " + previousCard);

var nextCardNumber = +number + 1;
var nextCard = nextCardNumber + suit;
console.log("The next cart to 3p is " + nextCard);

var all = previousCard + (" ") + card + (" ") + nextCard;
console.log("Cards'concatenation is " + all);


/*3. Define una variable cuyo valor sea una cadena que represente una carta de la baraja, cuyo valor sea mayor que 9.
Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta.
¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?*/

var card = "10c";
var suit = card[2];
console.log(suit);

var card2 = "9c";
var suit2 = card2[1];
console.log(suit2);
