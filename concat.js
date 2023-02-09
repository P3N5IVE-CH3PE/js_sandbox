const primerNombre = "John";
const lastName = "Doe";
const age = 32;
const str = 'Hello my name is bob';

let val;

val = primerNombre + lastName;

//Concatenation
val = primerNombre + ' ' + lastName ;

//Append
val = 'Bob ';
val += 'Doe';

val = "Hello my names is " + primerNombre + " and my age is " + age;

//Escaping
val = 'That\'s awesome I can\'t wait!';

//length
val = primerNombre.length;

//concat()
val = primerNombre.concat(' ', lastName);

//change case
val = primerNombre.toUpperCase();
val = primerNombre.toLowerCase();

//Array
val = primerNombre[0];

//indef of
val = primerNombre.indexOf('J');

//Get last char()
val = primerNombre.charAt(primerNombre.length - 1);

//substring()
val = primerNombre.substring(0, 2);

//slice()
val = primerNombre.slice(0,2);

//split()
val = str.split(' ');

console.log(val);

