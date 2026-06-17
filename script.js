let str1 ="", str2 ="", operator ="", result ="";

const addtostring = (number) => {
    if(operator == "" && str1 ==""){
        str1=number;
    }
    else if (operator == "" && str1 !=""){
        str1+=number;
    }
    else if(operator != "" && str2 ==""){
        str2=number;
    }
    else if(operator != "" && str2 !=""){
        str2+=number;
    }
}

const display =(str1, operator, str2) => {
    let textdata=document.querySelector("#text");
    textdata.value=str1+" "+operator+" "+str2;
}

document.querySelector(".ac").addEventListener("click",() =>{
    let textdata=document.querySelector("#text");
    console.log(textdata.value);
});

let numbers=document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click",() =>{
    addtostring(number.innerText);
    display(str1, operator, str2);})

});

let operators=document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click",() => {
       operator=op.innerText; 
        display(str1, operator, str2);
    })
});




