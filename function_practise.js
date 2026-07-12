//Q. create a function using "function" keyword that takes a String as an argument & returns the number of vowels in the string.


/*

function check(str){
    let vowelnum=0;
    for(let str_value of str.toLowerCase()){
        if (str_value == "a" || str_value == "e" || str_value == "i" || str_value == "o" || str_value == "u"){
            vowelnum++;
        }
    }
    console.log(`there are ${vowelnum} vowels in ${str}`);
}

check("Eklavya");

*/

const count_vow =(str)=>{
    let count=0;
    for(let str_value of str.toLowerCase()){
        if (str_value == "a" || str_value == "e" || str_value == "i" || str_value == "o" || str_value == "u")
        {
            count++;
        }
    }
    return count;
}

let val=count_vow("Samrat");
console.log(val);