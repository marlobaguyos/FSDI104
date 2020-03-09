//alert("hello")

// prompt("Enter your name: ");
// console.log("my first message on the console");

var x = 10;
let y = 20;
const name="Chris";

console.log(name);
x="hello";
y="pogi";
console.log(x);
console.log(y);

var sentence = "Cohort 7";
//var message = "the best cohort ever";

console.log(sentence);
sentence="the best " + sentence + " ever";
sentence=sentence.replace('best', 'worst');

console.log(sentence);

// var num1=10;
// var num2=30;

var num1 = parseInt(prompt("Enter first number: "));
alert('Your First Number: ' + num1)
var num2 = parseInt(prompt("Enter Second number: "));
alert('Your Second Number: ' + num2)


var sum = num1 + num2;
console.log(sum);
var rest = num1 - num2;
console.log(rest);
var mult = num1 * num2;
console.log(mult);
var div = num1 / num2;
console.log(div);

// var user = prompt("Name: ");
// alert('Welcome ' + user);

document.getElementById('division').innerHTML=`Num 1 = ${num1} <br> <br> Num 2 = ${num2}`;

// " Num1 = " + num1 + " <br> <br> " + "Num2 = " + num2 + "<hr>";

for(var i=0; i<=10; i++){
    console.log("Hello JS");
}