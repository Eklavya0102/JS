//Q. for a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class

let marks=[85,97,44,37,76,60];
let sum=0;

// for (let i=0; i<marks.length; i++){
//     sum+=marks[i];
// } 
// console.log(`Total students = ${marks.length} \nSum of mark = ${sum}`);
// let average_mark=sum/marks.length;
// console.log(`The average mark of class = ${average_mark}`)

//or 

for(let each_mark of marks){
    sum+=each_mark;
}
let average_m = sum/ marks.length;
console.log(`Sum of marks = ${sum} \nTotal student = ${marks.length} \nAverage mark = ${average_m}`)

// Q. For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on them. Chnage the array to store final prive after applying offer

//here with for-of loop we indirectly track the indx of the values , to replace with the exact value we need to know the indx therefore we dont use for-of loop we use another loop.

/*
let initial_price=[250,645,300,900,50];
let idx=0;
for (let price of initial_price){
    let discount=price*0.1;
    initial_price[idx]=initial_price[idx]-discount;
    idx++;
} 
console.log(`Updated price array = ${initial_price}`)
*/


//for loop
let price=[250,645,300,900,50];
console.log(`Old Price = ${price}`);

for(let i=0; i<price.length; i++){
    let discount=price[i]*0.1; //10/100=0.1
    price[i]-=discount; //changing the array
}
console.log(`New updated price = ${price}`)
