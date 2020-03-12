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