// toggle darkmode and light mode

//Q.1 using the classList toggle , we have to create two class for this . 

// let btn=document.querySelector("#toggle");
// const dark=()=>{
//     let body=document.querySelector("body");
//     body.classList.toggle("dark");
// }
// btn.addEventListener("click",dark);

//Q. using event listner
// -> we have to keep track of the darkmode 

let btn=document.querySelector("#toggle");
let current="light Mode";

const change =()=>{
    let body = document.querySelector("body");
    if(current==='light Mode'){
        // body.style.backgroundColor="black";
        // body.style.color="white";
        body.classList.remove('light');
        body.classList.add('dark');
        current = 'dark Mode';
    }else{
        // body.style.backgroundColor="white";
        // body.style.color="black";
        body.classList.remove('dark');
        body.classList.add("light");
        current='light Mode';
    }
    btn.innerText=current;
    
}

btn.addEventListener("click",change);


