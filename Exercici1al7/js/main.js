// Exercici 1
console.log('Hola mundo');

//Exercici 2
alert('El meu nom es Jose');

//Exercici 3
let name = 'Jose L.'
let lastname = 'Nortes'

console.log(name +' ' + lastname);

// Exercici 4

let num1 = 4;
let num2 = 7;
let sum = num1 + num2;

console.log('La suma entre ' + num1 + ' i ' + num2 + ' es ' + sum);

//Exercici 5
let qual = 5;
const passed = 5;
let result;

if (qual => 5) {
    result = ' has aprovat';
} else {
    result = ' has suspés';
}

let message = 'La teva nota és: ';
alert(message + qual + ' per tant' + result);

//Exercici 6
let sentence = 'Tinc un cotxe de color blau';

let sentNew = sentence.replace('blau', 'vermell');
alert(sentNew);

let sent_new_car = sentence.replace(/o/g, "u");
alert(sent_new_car);

//Exercici 7
let objects = [ 'taula', 'cadira', 'ordinador', 'libreta'];

for (let i = 0; i < objects.length; i++){
    console.log("L'objecte " + objects[i] + " està a la possiió " + i);
}


