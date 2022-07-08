let lowerDisplay = document.getElementById("lowerDisplay");
let upperDisplay = document.getElementById("upperDisplay");
let buttons = document.getElementsByTagName("button");
let numbers = [0,1,2,3,4,5,6,7,8,9]

const operations = {
    add: "+",
    subtract: "-",
    divide: "/",
    multiply: "*",
   
}
let uptext = ""       // Text for upper box
let lowtext = ""           // Text for lower box

let num1 = null;
let num2 = 0;
let ans = "";
let operator = "";

function add(num1,num2){
    sum = num1 + num2
    return sum
}

function subtract(num1,num2){
    diff = num1 - num2
    return diff
}

function multiply(num1,num2){
    product = num1 * num2
    return product
}

function divide(num1, num2){
    quotient = num1 / num2
    return quotient
}

function operate(num1,num2,operator){
    if(operator === "+"){
        return add(num1,num2)
    }
    else if(operator ==="-"){
        return subtract(num1,num2)
    }
    else if(operator === "x"){
        return multiply(num1,num2)
    }
    else if(operator === "/"){
        return divide(num1,num2)
    }    
}

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click",function(){

        if(buttons[i].dataset.set in numbers || buttons[i].dataset.set == "." ){
            lowtext += buttons[i].textContent
            uptext +=buttons[i].textContent
            lowerDisplay.textContent = lowtext

        }
        else if(buttons[i].dataset.set == "erase"){
            lowtext = String(lowtext).slice(0,-1)
            uptext = lowtext    
            lowerDisplay.textContent = lowtext
           
        }   
        else if(buttons[i].dataset.set == "delete"){
            num1 = 0
            num2 = 0
            lowtext = ""
            uptext = ""
            lowerDisplay.textContent = lowtext
            upperDisplay.textContent = uptext
        }
        
        else if(buttons[i].dataset.set in operations && lowtext != ""){
            
            
        }
        
        else if(buttons[i].dataset.set == "equal"){
        }
    }

    )
}
