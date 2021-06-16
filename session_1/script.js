//alert("hello")

// prompt("Enter your name: ");
// console.log("my first message on the console");

/*
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

var num1=10;
var num2=30;

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

var user = prompt("Name: ");
alert('Welcome ' + user);

document.getElementById('division').innerHTML=`Num 1 = ${num1} <br> <br> Num 2 = ${num2}`;

" Num1 = " + num1 + " <br> <br> " + "Num2 = " + num2 + "<hr>";

for(var i=0; i<=10; i++){
    console.log("Hello JS");
}
*/

//var age = prompt("Enter your age");

//var email = prompt("Enter your email");

//var n = email.includes('@');

//var number=10;
//var string="10.00";

// var number1 = prompt("Enter number 1");
// var number2 = prompt("Enter number 2");

// if(number1 > number2) {
//     console.log("The first number is the greater than the number 2");
// }
// //You can also use an else if to check if number2 > number1
// else{
//     console.log("2 is greater than 1");
// }

//console.log(n);

//if(n) is the same asw if(n===true)
/*if (n===true){
    console.log("Correct email address");dfasdfa
}
else{
    console.log("type again");
}*/

/*if(number===string){
    console.log("yes");
}*/


//arrays

let names = ['Chad', 'Marlo', 'Chris', 'Efren', 'Marquis', 'Kenneth', 'Zach'];

var ages = [30,32,34,38,30,28];

// console.table(names);
// console.table(ages);
//var position=3;

for(position=0; position < names.length; position++){
    console.log(names[position]);
    console.log(ages[position]);
}

/*
for(position=0; position < names.length; position++){
    alert(names[position] + " " + ages[position]);
} 
*/

var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.table(days);

var matriz = new Array(4);

for(var j = 0; j < 4; j++)
matriz[j] = new Array(2);

matriz[0][0]=10;
matriz[0][1]=1;
matriz[1][0]=12;
matriz[1][1]=2;
matriz[2][0]=10;
matriz[2][1]=1;
matriz[3][0]=12;
matriz[3][1]=2;

console.log(matriz[0][0]);
console.log(matriz[0][1]);
console.log(matriz[1][0]);
console.log(matriz[1][1]);