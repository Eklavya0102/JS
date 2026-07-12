//is it used for arrays 
//-> it is an method
//-> it is used to create a loop

/*
//suntax 
arrayName.forEach(callBackFunction)
-> callbackfunction : is a function execute for each element in the arrayName

-> it is an function passed as an argument

-> callback function is generally passed in the form of arrow function

-> only used for arrays not for string 

-> It is an higher order function/method 
-> any function that takes function as parameter or returns function as value then it is higher order function.

*/

//example

let num=[1,2,3,4,5,6];

num.forEach(function printval(value){ //<-value at each index will come to value parameter
    console.log(value);
})

//generally calback function passed as arrow function
num.forEach((number)=>{
    console.log(number);
});

let city=["Kathmandu","Pokhara","Illam","Birjung"];

city.forEach((city_name)=>{
    console.log(city_name.toUpperCase());
});


/*
-> we have 3 parameters (value, index, array)
-> value is the variable that we create to store the each item of the array there to perform looping
->index is the position 
-> array is the array that we create

*/
//example -> these way we can use parameters
city.forEach((name_city,index,city_arr)=>{
    console.log(`${index} : ${name_city} : Array = ${city_arr}`);
})