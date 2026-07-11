// Array is the collection of same type of intems in JS
// They are stored linearly and index matters

//prefer where we want to store multipe items but with one name

// declaration
// let arrayname = [items]
// let marks=[20,25,24,67,89,90];
// let fruit=["banana","apple","mango","pupaya"];
// let mixed=["banana",20,"apple","mango",34]  generally this is nnot preferred but in JS we can make this type of array

// example
let marks=[65,98,52,54,85];
console.log(marks);
console.log(marks.length); //property

//length is an property , property returns an value whereas an method does some work.

let greeting=["Hello", "Goodmorning", "Namaste"];
console.log(greeting);

console.log(typeof greeting); //object
console.log(typeof marks);    //object
//array itself is an internally an object , but we separately treat the array , we have key value pair but we treat index as key of the value of array.

//accessing the value through the index
// arrayname[index];
console.log(marks[0]); //65

//changing the value in array. i.e array is mutable
// arrayname[index_of value] = new value;
marks[0]=50;
console.log(marks[0]); //50 the value which we cahnged

//looping over an array
//using for loop
for(let i=0; i<greeting.length; i++){
    console.log(greeting[i]);
}

//using for-of loop (for-in can also be used but generally we prefer for-of)
for (let word of greeting){
    // console.log(word.toUpperCase()); similarly we can use other methods
    console.log(word); 
}

