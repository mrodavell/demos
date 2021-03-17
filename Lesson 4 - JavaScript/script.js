/* var reply = confirm("Are you sure?")
alert(reply)

var reply2 = prompt("What is your name?")
alert(reply2)

VARIABLE NAMING 
VARIABLE NAMES SHOULD MEAN SOMETHING
NAME YOUR VARIABLE ACCORDING TO PURPOSE
FOLLOW NAMING CONVENTIONS (CAMELCASE, UNDERSCORED)
e.g.
firstNumber
secondNumber
result
result_value

VARIABLE DECLARATION
let x = 10
var b = 10
const y = 10 // immutable
*/
let result = 0
let operator = "+"
let formatDisplay = ""

function add(){
    operator = "+"   
}

function sub(){
    operator = "-"    
}

function divide(){
    operator = "/"
    
}

function multiply(){
    operator = "*"
}

function equal(){
    let firstNumber = document.querySelector('#firstNumber').value
    let secondNumber = document.querySelector('#secondNumber').value

    // if(operator == "+"){
    //     result = parseInt(firstNumber) + parseInt(secondNumber)
    // }else if(operator == "-"){
    //     result = parseInt(firstNumber) - parseInt(secondNumber)
    // }else if(operator == "/"){
    //     result = parseInt(firstNumber) / parseInt(secondNumber)
    // }else if(operator == "*"){
    //     result = parseInt(firstNumber) * parseInt(secondNumber)
    // }

    switch(operator){
        case "+":
            result = parseInt(firstNumber) + parseInt(secondNumber)
            break
        case "-":
            result = parseInt(firstNumber) - parseInt(secondNumber)
            break
        case "/":
            result = parseInt(firstNumber) / parseInt(secondNumber)
            break
        case "*":
            result = parseInt(firstNumber) * parseInt(secondNumber)
            break
        default:  
            result = "NAN"
    }

    document.querySelector('#display').innerHTML = result <= 0 ? "Less than zero or zero" : result
    generate()
}

function generate(){
    let n = document.querySelector('#firstNumber').value
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            formatDisplay = formatDisplay + "<i style='margin-right: 25px; width: 10px; text-align: center;'>"+(j*i)+"</i>"
        }
        formatDisplay =  formatDisplay + "<br/>"        
    }
    console.log(formatDisplay)
    document.querySelector('#displayTable').innerHTML = formatDisplay
    // while(condition){
    //     // statements
    // }

    // do{
    //     //statements
    // }while(condition)
}

