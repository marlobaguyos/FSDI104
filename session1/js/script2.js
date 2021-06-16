//Learning functions

//function declaration
/*function hello() {

    alert("Hellow world!!");

}

hello();

//function expression (like a variable)
var sum = function() {
    console.log(1+2);
}
sum();

//IIFE
(function(topic){
    console.log("I am learning" + topic)
})('JS');

function msg(topic) {
    console.log('I am learning' + topic);
}
msg('JS');*/

var num1 = 10;
var num2 = 20;

// var num1 = parseInt(prompt("Enter first number: "));
// var num2 = parseInt(prompt("Enter second number"));

// function Sum(x,y) {
//     return x + y;
// }

// let Sum = (x,y) => x + y;

// let result = Sum(num1, num2);
// function Mul(number) {
//     console.log(2 * number);
// }

// Mul(result);

// //arrow function
// let traveling = destination => 'Travel to ... ' + destination;

// var travel = traveling('Italy');
// console.log(travel);

const logged = true;

if(logged) {
    console.log('Welcome to the site');
}
else {
    console.log('Please log in');
}

console.log(logged ? 'Welcome to the site' : 'Please log in');

let cash = 600;
let totalCart = 1000;
let creditCard = false;

if(cash > totalCart) {
    console.log('Successful transaction');
}
else if(creditCard) {
    console.log('You paid with a credit card');
}
else {
    console.log('Failure');
}

switch(card){
    case 'true':
        credit=true;
        break;
    case 'faule':
        credit=false;
        break;
    default:
        console.log('invalied option');
        break;
}

let hour = 8;

if(hour > 0 && hour <= 12) {
    console.log('Good morning');
}
else if(hour > 12 && hour <= 18) {
    console.log('Bounasera');
}
else if(hour > 18 && hour <= 24) {
    console.log('Bounanotte');
}
else {
    console.log('Not valid');
}