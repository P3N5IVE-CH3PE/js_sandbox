//create some arrays
const numbers = [10,20,30,40];
//create array through constructor
const number2 = new Array(50,60,70,80);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22,'Hello', true, undefined, null, {a:1}, new Date()];

let val;

// Get array length
val = numbers.length;
//Check if it's array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(100);


//Mutating Arrays
//Adds to the end of array
numbers.push(250);
//adds to teh front of array
numbers.unshift(120);

//sorting arrays
val = fruit.sort();

val = numbers.sort();

//Use compare function to order numbers from least to greatest or greatest to least
val = numbers.sort(function(x,y){
    return y-x;
});

val = numbers.sort(function(x,y){
    return x - y;
});

console.log(numbers);
console.log(val);
