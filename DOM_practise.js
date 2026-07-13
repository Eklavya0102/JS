//Q. Create an heading with text and append another text using JS.
let name=document.querySelector("h1");
console.log(name.innerText);

name.innerText +=" The Master"; //concatination

//Q.Create 3 div with common class name. Aaccess them and add unique text to each of them.
let divs= document.querySelectorAll(".box");
// divs[0].innerText = "Hello";
// divs[1].innerText = "World";
// divs[2].innerText = "JS";

//using loop
let index = 0;
for (let divv of divs){
    divv.innerText = `Hello ${index}`;
    index++
}


