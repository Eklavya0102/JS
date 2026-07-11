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

//Array methods

// push () -> add to end
let name=["Eklavya","Asmi","Samrat"];
name.push("mango");
console.log(name);

//  pop () -> delete from end and return
let furniture=["table","chair","spoon"];
furniture.pop("spoon");
console.log(furniture);

//unshift() -> add elements to begining
let id=[11,12];
id.unshift(10);
console.log(id);

//shift() -> removes element from begining
let email=["hello","arial@gmail.com","barial@gmail.com"];
email.shift("hello");
console.log(email);

// toString() -> converts array to string
let fooditems=["Burger","MOMO","Paneer","Chichen","Pineapple"];
console.log(fooditems); //prints in form of array
console.log(fooditems.toString()); //prints in form of string 

//Concat() -> it joins multiple array and return new array
let bird=["chichken","pigeon","parrot"];
let reptile=["snake","crocodile"];
let mamal=["bat","Human"];
let animals=bird.concat(reptile, mamal); //returned new array
console.log(animals);

//slice()-> returns a piece of the array
let num=[10,20,30,40,50,60];
let splice_num= num.slice(1,4);
console.log(splice_num);
console.log(num);  //this proves it doent change the original method

//splice()-> add,remove,replace in the original array , 3 parameter (starting index, delcount, new elements...)
let number=[1,2,3,4,5,6,7,8];
number.splice(2,3,10,20,30); //will start from index 2 , 3 eleents will be deleted and 3 new will be placed in place of the deleted ones
console.log(number); 

//add elements 
number.splice(1,1,101);  //in index 1 delet item 1 and add 101
console.log(number);

//replace item
number.splice(3,1,100);
console.log(number);

//sort()-> sorting the array, sort converts number into string first so use assending or decending order 
let sortnum=[4,8,21,3,1,6,5];
sortnum.sort((a,b)=> a-b);  //assending order
console.log(sortnum);

//reverse()-> reverse a number
let rev_num=[1,2,3,4,5,6];
rev_num.reverse();
console.log(rev_num);









