// for loop

// for(let i = 0;i < 10;i++){
//     if(i === 2){
//         console.log(`${i} is my favorite number!`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`Sto the loop at ${i}`);
//         break;
//     }

//     console.log(`Numebr is ${i}`);
// }

// let i = 0;

// while(i < 10){
//     console.log(`Number is ${i}`);
//     i++;
// }

// let i = 0;

// do {
//     console.log(`Number is ${i}`);
//     i++;
// }

// while(i< 10);

//Loop Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH LOOP THROUGH ARRAY;SIMPLER
// cars.forEach(function(car){
//     console.log(car)
// });

//MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });

// console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

//FOR IN LOOP
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}