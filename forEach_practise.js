//Q. for a given array of numbers, print the square of each value using the forEach loop

let num=[1,2,3,4,5];
num.forEach((individual_num)=>{
    console.log(`Square of ${individual_num} = ${individual_num**2}`);
});

// anoher method : passing the arrow function directly as argument
let square = (individual_num)=>{
    console.log(`Square of ${individual_num} = ${individual_num**2}`);
};

num.forEach(square);
