
/* basic structure of conditionals: 
if(something) {
    do something
}else {
    do something else
} */ 

const id = "100";

// //Equal To
// if (id == 101) {
//     console.log("Correct Answer!");
// } else {
//     console.log("Incorrect Answer!");
// }

// //Not Equal to
// if (id !== 101) {
//     console.log("Correct Answer!");
// } else {
//     console.log("Incorrect Answer!");
// }

// //Equal To Value And Type
// if (id === 101) {
//     console.log("Correct Value and Type!");
// } else {
//     console.log("Incorrect Value and Type!");
// }

// if(id){
//     console.log(`The ID is: ${id}`)
// } else{
//     console.log(`There is no ID.`);
// }

//Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is: ${id}`)
// } else{
//     console.log(`There is no ID.`);
// }

// //If Else
// let value;
// // value = 'red';

// if(value === 'red'){
//     console.log(`Color is red!`)
// } else if (value === 'blue'){
//     console.log(`Color is blue`);
// } else{

//     console.log('No color');
// }
const name = 'Steve';
const age = 10;

// And &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if( age > 12 && age < 18){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age > 0 || age < 12){
    console.log(`${name} is a child`);
} else if( age > 12 || age < 18){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

//Ternary Operator
console.log( id === 100 ? 'Correct Value and Type' : 'Incorrect Value and Type');


