//functions

/*
function delcaration
function hello() {
    alert("Hello World");
}

hello();

function expression (like a variable)
var sum = function(){
    console.log(1 + 2);
}

sum();

IIFE - Auto Calling functions
(function(topic){
    console.log("I am learning " + topic);
})('JS');

function msg(topic){
    console.log("I am learning " + topic);
}

msg('JS');
*/

var num1 = 10;
var num2 = 20;

function Sum(x,y){
    return x+y;
}

let result=Sum(num1, num2);

function Mul(number){
    console.log(2 * number);
}

Sum(2, 3);
Mul(result);

// let traveling = function(destination){
//     return 'Travel to ... ' + destination;
// }

// var travel = traveling('Italy');
// console.log(travel);


//Arrow funciton
let traveling = destination => 'Travel to ... ' + destination;

var travel = traveling('Philippines');
console.log(travel);

const logged = false;

// if(logged){
//     console.log('Welcome to the site');
// }
// else{
//     console.log('Please log in');
// }

console.log(logged ? 'Welcome to the site' : 'Please log in boy');

let cash=600;
let totalCart=1000;
let creditCard=true;

function payment(cash, total, card){
    if(cash>totalCart){
        console.log('Successful transaction');
    }
    else if(creditCard){
        console.log('You paid with a credit card');
    }
    else{
        console.log('Failure');
    }
}

payment(500,400,false);
payment(500,1000,true);
payment(200,500,true);