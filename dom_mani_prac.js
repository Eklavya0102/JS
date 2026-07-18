let btn=document.createElement("button");
btn.innerText="Click ME !"
btn.style.backgroundColor="red";
btn.style.color="white";

document.querySelector("body").prepend(btn);

//question 2 from here, adding new class using classList
// document.querySelector("p").setAttribute("class","css_new")
// console.log(document.querySelector("p").classList);

document.querySelector(".question_2").classList.add("css_new");   //<both the previous and new class styles are applied
 //-> use remove to remove element 