import {add,subtract,multiply,divide,percentage} from "./calculate.js";


let str1="",str2="",result="",operator="";

let textdata=document.querySelector("#text");
const addtostring = (number) => {
    if(operator == "" && str1 =="" && number!="."){
        str1=number;
    }
    else if (operator == "" && str1 !=""){
        if(number==="." && str1.includes(".")){
            return;
        }
        str1+=number;
    }
    else if(operator != "" && str2 =="" && number!="."){
        str2=number;
    }
    else if(operator != "" && str2 !="" ){
        if(number==="." &&str2.includes(".")){
            return;
        }
        str2+=number;
    }
}

const calculate =(str1, str2, operator) => {
    str1=parseFloat(str1);
    str2=parseFloat(str2);
    if(operator==="+"){
        return add(str1,str2);
    }
    else if(operator==="-"){
        return subtract(str1,str2);
    }
    else if(operator==="x"){
        return multiply(str1,str2);
    }
    else if(operator==="/"){
        return divide(str1,str2);
    }
    else if(operator==="%"){
        return percentage(str1,str2);
    }
    else return str1;
}


const display =(str1="", operator="", str2="") => {
    textdata.value=str1+" "+operator+" "+str2;
}

const backspace = () => {
    if(str2!==""){
        str2=str2.slice(0,-1);
    }
    else if(operator!=""){
        operator="";
    }
    else if(str1!==""){
        str1=str1.slice(0,-1);
    }
    display(str1,operator,str2);
}


let numbers=document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click",() =>{
    addtostring(number.innerText);
    display(str1, operator, str2);})

});

let operators=document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click",() => {
        if(op.classList.contains("calc")){
            if(str1===""){
                return;
            }
            operator=op.innerText; 
            display(str1, operator, str2);
        }
        else if(op.classList.contains("ac")){
                textdata.value="";
                operator="";
                str1="";
                str2="";
        }
        else if(op.classList.contains("equals")){
            if(str1==="" || (str2==="") || operator===""){
                return;
            }
            result=String(calculate(str1,str2,operator));
            display(result);
            str1=result;
            str2="";
            operator="";
        }
        else if(op.classList.contains("delete")){
            backspace();
        }
    })
});




