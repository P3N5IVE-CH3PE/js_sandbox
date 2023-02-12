//Function Declarations

function greet(firstName = 'John', lastName=' Doe'){
    //scope of function
    // console.log(`Hello!`);

    //This turns the function into a storage of result.As a result,
    //You need to wrap around a console output.
    return `Hello my name is ${firstName} ${lastName}`;

}

// console.log(greet());

// Function Expressions:

//Anonymous function
const square = function(x = 3){
    return x*x;
};

// console.log(square(8));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFE's

// (function(){
//     console.log(`IIFE Ran..`);
// })();


// (function(name){
//     console.log(`Hello my name is ${name}`);
// })("Bob");

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log(`Add todo...`)
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.add();
todo.edit(20);