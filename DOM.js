// console.log(document.body);
// console.dir(document.body);

/*
DOM(Document Object Modal) manipulation:

-> selecting by ID
   document.getElementById("MyID")

-> Selecting by class name
   document.getElementsByClassName("ClassName")

-> By tag:
    document.getElementsByTagName("p")

-> By query selector
    document.querySelector("#id/.class/tag") ->will return 1st element

    document.querySelectorAll("id/class/tag") -> will return NodeList

*/

let store= document.getElementById("myid");
console.log(store);

let class_1= document.getElementsByClassName("nav");
console.log(class_1);

let div_elements= document.getElementsByTagName("div");
console.log(div_elements); 

let first_ele=document.querySelector("#myid");
console.log(first_ele);

let node_ele=document.querySelectorAll("div");
console.log(node_ele);

/*
Properties:  we can get also and we can set also 

-> tagName : returns tag for element nodes
eg: 
let out = document.querySelector("#myid").;
console.log(out.tagName);   //<- H1 

-> innerText : returns the text content of the element and all its children
eg:
let inner_txt = document.querySelector(".navbar");
console.dir(inner_txt.innerText);

-> innerHTML : returns the plain text or HTML in the element
eg:
let inner_txt = document.querySelector(".navbar");
console.dir(inner_txt.innerHTML);
inner_txt.innerText = Hello World; //<- this will be there in place of previous texts

->textContent: returns textual content even for hidden element
eg:
let hidden= document.querySelector("#text");
console.log(hidden.innerText); //<- this doesnt show the text contained
console.log(hidden.textContent); //<- This shows the hidden text

*/











 

