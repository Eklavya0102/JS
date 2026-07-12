//block of code which does specific task when called

//syntax:

/*


function defination:
function functionName(){
    //do some work;
}


with parameter:
function functionName(Para1,Para2){
    //do some work;
}



function call:
functionName();


*/




//example:

/*


function hello(){
    console.log(`Welcome to JS`);
}

hello();


// Example with parameter

function greeting(name,age){  //<- parameter : value passed into the defination
    console.log(`Hello ${name}`);
    console.log(`As you are ${age} year old.`)
}

let name=prompt("Enter your name: ");
let age= prompt("Enter you age: ");

greeting(name,age);  //<- argument : values passed into the function call




*/

//function to calculate sum of two numbers
/*

function sum(num1,num2){
    console.log(num1+num2);
}

sum(1,2);

//or


function sum(x,y){
    s=x+y;  
    return s;    //<- this will return the calculated value but not display, to display we will need to store the calculated value of function to a variable and then use console.log.
    console.log("Hello world");  //<- This code wil not execute because it is after return.
}

let sum_value=sum(1,2);
console.log(sum_value);

*/


//note: The function parameter -> Are local variables of the function , are block scope, the original value of argument is not changed 







//Arrow Functions <- it is the compact way of writing function, it is basically we store function into an variable, we use this for small work like add,multiplication, to print.

/*

Suntax: 
Const/let/var functionName=(para1,para2...)=>{
    //do some work;
};

*/

const sum=(a,b)=>{
    console.log(a+b);
}
sum(1,2);

const mul=(a,b)=>{
    console.group(a*b);
}
mul(2,3);

const printHello=() => console.log("Hello");
printHello();



