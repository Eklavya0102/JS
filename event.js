/*

Events in JS
    -> The change in the state of an object is know as event. 
        -> eg: button pressed colour changed, mouse click dialouge box dissapered, form submission, etc.
    -> we use to trigger any work. 

    -> Events mdn more events


    -> onclick,ondblclick,onmouseover <- inline event handling


    -> node.event = ()=>{

        //work
    
    }

    -> priority is given to JS event hanler not the inline event handler. 

    -> once the event is handled and when we write another handler then it overwrites it so, we only define one. 


//Event Object:
    -> Special object which saves the background info , where the mouse in the display clicked and all .

    -> All event handlers have acces to the event object's property and methods.

    -> node.event=(event_object_any_variable) =>{
        //usual code;
    }
    
    -> generally we use "e" as vriable name.

    -> some property of event object :- type ,target,clientX,clientY.


//Event Listeners:
    -> this enables multiple event to be defined.

node.addEventListener("event",callback)
    -> "On" is removed from the event when using in the addeventListener. 
    -> eg: onmouseover -> mouseover
            ondblclick -> dblckick
            onclick    -> click
            onkeyup    -> keyup


node.removeEventListner(event,callback)
    -> we have to make function/arrow function and pass it to add and remove evenet listener 



*/

let num=0;

let btn1=document.querySelector(".btn1");
btn1.onclick=()=>{
    console.log("Btn clicked");
    num++;
    console.log(num);
};

let btn2=document.querySelector(".btn2");
btn2.ondblclick=(e)=>{
    console.log(e);
    console.log("double clicked !");
};

let div=document.querySelector(".div1");
div.onmouseover=()=>{
    console.log("The pointer is inside the div");
}

div.addEventListener("click",()=>{
    console.log("dive clicked");
})

const removedem = ()=>{
    console.log("double clicked clicked 1, sample remove");
};

btn2.addEventListener("click",removedem);

btn2.removeEventListener("click",removedem); // <- now clicking once will not work .



