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
let bool = false;

let num1 = null;
let num2 = null;
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
            num1 = Number(lowtext)
            uptext = lowtext    
            lowerDisplay.textContent = lowtext
           
        }   
        else if(buttons[i].dataset.set == "delete"){
            num1 = null
            num2 = null
            lowtext = ""
            uptext = ""
            operator = ""
            lowerDisplay.textContent = lowtext
            upperDisplay.textContent = uptext
        }
        
        else if(buttons[i].dataset.set in operations && lowtext != ""){
           
            if(num1 == null){
               
                num1 = Number(lowtext)
                // uptext += buttons[i].dataset.key
                upperDisplay.textContent = uptext
                lowtext = ""
                // console.log("I am num1 > ",num1);

            }
            
            if(operator == ""){
                // console.log("operation2")
                operator = buttons[i].dataset.key;
                uptext += operator
                upperDisplay.textContent = uptext
                console.log("I am old operator",operator)
            }
            else{
                if(num2 == null){
                    // console.log("operation3")
                   
                    num2 = Number(lowtext)
                    // console.log("I am num2 > ",num2);
                    ans = operate(num1,num2,operator)
                    
                    num1 = ans;     // num1 becomes prev answer
                    num2 = null;     // num2 will act as new input
                    lowerDisplay.textContent = num1
                    operator = buttons[i].dataset.key       // Selecting new operator
                    uptext += operator
                    upperDisplay.textContent = uptext
                    console.log("I am new operator", operator)
                }
            }
        
            lowtext = ""
        }
        else if(buttons[i].dataset.set == "equal"){
          
            if(operator == ""){
                operator = buttons[i].dataset.key;

            }
            else{
                if(num2 == null){
                    num2 = Number(lowtext)
                    console.log("I am num2 > ",num2);
                    ans = operate(num1,num2,operator)

                    upperDisplay.textContent = uptext
                    lowtext = ans
                    num1 = ans;     // num1 becomes prev answer
                    num2 = null     // num2 will act as new input
                    lowerDisplay.textContent = num1
                    operator = ""
                    
                }
            }
            //  
        }
    }

    )
}



















// let lowerDisplay = document.getElementById("lowerDisplay");
// let upperDisplay = document.getElementById("upperDisplay");
// let buttons = document.getElementsByTagName("button");
// let numbers = [0,1,2,3,4,5,6,7,8,9]

// const operations = {
//     add: "+",
//     subtract: "-",
//     divide: "/",
//     multiply: "*",
   
// }
// let uptext = ""       // Text for upper box
// let lowtext = ""           // Text for lower box
// let bool = false;

// let num1 = null;
// let num2 = null;
// let ans = "";
// let operator = "";

// function add(num1,num2){
//     sum = num1 + num2
//     return sum
// }

// function subtract(num1,num2){
//     diff = num1 - num2
//     return diff
// }

// function multiply(num1,num2){
//     product = num1 * num2
//     return product
// }

// function divide(num1, num2){
//     quotient = num1 / num2
//     return quotient
// }

// function operate(num1,num2,operator){
    
//     if(operator === "+"){
//         return add(num1,num2)
//     }
//     else if(operator ==="-"){
//         return subtract(num1,num2)
//     }
//     else if(operator === "x"){
//         return multiply(num1,num2)
//     }
//     else if(operator === "/"){
//         return divide(num1,num2)
//     }    
// }

// for(let i = 0; i < buttons.length; i++){

//     buttons[i].addEventListener("click",function(){

//         if(buttons[i].dataset.set in numbers || buttons[i].dataset.set == "." ){
//             lowtext += buttons[i].textContent
//             uptext +=buttons[i].textContent
//             upperDisplay.textContent = uptext
        
//             if(!bool){
//                 num1 = Number(lowtext)
//             }
//             else{
//                 num2 = Number(lowtext)
               
//                 ans = operate(num1,num2,operator)
                
//             }
//             console.log("Num1 is ", num1, " ~ Num2 is ", num2)

//             console.log("Answer is > ", ans);

//             // if(ans != null){
//             //     lowerDisplay.textContent = ans;
//             // }
//             lowerDisplay.textContent = ans

            
//         }

//         else if(buttons[i].dataset.set == "erase"){
//             uptext = String(uptext).slice(0,-1)
//             lowtext = lowtext.slice(0,-1)
//             num2 = Number(lowtext)
//             upperDisplay.textContent = uptext
//             ans = operate(num1,num2,operator)
//             if(num2 == 0 || operator == ""){
//                 lowerDisplay.textContent = num1
//             }
        

//             lowerDisplay.textContent = ans


          
//         }   
//         else if(buttons[i].dataset.set == "delete"){
//             num1 = null
//             num2 = null
//             bool = false
//             ans = ""
//             lowtext = ""
//             uptext = ""
//             lowerDisplay.textContent = lowtext
//             upperDisplay.textContent = uptext
//         }
        
//         else if(buttons[i].dataset.set in operations && lowtext != ""){
//             lowtext = ""
//             bool = true
          
//             operator = buttons[i].dataset.key
//             if(num2 == !null){
//                 num1 = operate(num1,num2,operator)

//             }
           
//             lowerDisplay.textContent = num1
//             uptext += operator
//             upperDisplay.textContent = uptext
        
            
//         }
        
//         else if(buttons[i].dataset.set == "equal"){

//             }
//         }
//     )
    
// }



// /*

// 1) Input some number1  {That will be in lowtext}
// 2) Press an operator
// 3) Number in lowtext will become first number
// 4) Input some number2 {}
// 5) Start operating and displaying answer in lowerdisplay

//  */

// // operator = buttons[i].dataset.key
// //             if(num1 == null){       // This will always run
// //                 num1 = Number(lowtext)
// //                 lowerDisplay.textContent = lowtext
// //                 uptext+= operator
// //                 upperDisplay.textContent = uptext
// //                 lowtext = ""
// //             }   
// //             else{                 // After first operator, then onwards it will run
// //                 num2 = Number(lowtext)
// //                 num1 = operate(num1,num2,operator)
// //                 lowerDisplay.textContent = num1
// //                 upperDisplay.textContent = uptext
// //                 lowtext = ""
// //             }