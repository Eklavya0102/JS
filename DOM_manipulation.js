// Attributes
/*
// getAttribute(attribute_name);  // to get the attribute value

let value = document.querySelector("div")
console.log(value.getAttribute("class"));
console.log(value.getAttribute("id"));//<- this prints the id valuse stored in the id varibale above



// setAttribute(attribute,value); //to set the attribute

let value = document.querySelector("div");
value.setAttribute("id","sample_changed"); //<- this changed the value of id from sample to sample_changed
console.log(value.getAttribute("id"));


// accessing the style :
    -> node_value.style <- to access the target
    -> node_value.style.property_name = "behaviour" <- to change the property/add

let st_var = document.querySelector("div");
st_var.style.backgroundColor="green";
st_var.innerText="this chnaged the previous text";


//Creating an Element through JS
    -> document.createElement("Element_Name");

//Displaying in the screen:
    -> node.append(element_variable); <- places the element in the last of node (inside)

    -> node.prepend(element_name); <- places at the begining of the node (inside)

    -> node.before(element_name); <- places at before the node (outside)

    ->node.after(element_name); <- places at after the node (outside)

//remove element:
    -> node.remove();
*/

let new_el=document.createElement("button");
new_el.innerText = "Click me !";
new_el.style.backgroundColor="black"
new_el.style.color="white"
new_el.style.borderStyle="solid"
new_el.style.borderWidth="5px"
new_el.style.borderColor="green"


let div = document.querySelector(".hello");
div.prepend(new_el);
div.append(new_el);

let new_div=document.createElement("div");
new_div.innerText="this is div 3";
new_div.style.backgroundColor="purple"
new_div.style.color="white"
new_div.style.borderStyle="solid"
new_div.style.borderWidth="3px"
new_div.style.borderColor="blue"

let div_2=document.querySelector("#second").after(new_div);
// div_2.after(new_div);

document.querySelector("span").remove(); //<- removed the span from first div



//appendchild()
//removechild()









