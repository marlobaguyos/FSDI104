//alert("hello")

//prompt("Enter your name: ");
// console.log("my first message on the console");

// var x=10;
// let y=20;
// const name="Chris";

// console.log(name);
// x="hello";
// console.log(x);
// y = 100.70;
// console.log(y);

// var sentence = 'Cohort 7';

// console.log(sentence);
// sentence = "the best cohort is " + sentence;
// sentence=sentence.replace('best', 'worst');

// console.log(sentence);

//-----------------------------
// var num1 = 10;
// var num2 = 30;

// var sum = num1 + num2;
// console.log(sum);

// var rest = num1 - num2;
// console.log(rest);

// var mult = num1 * num2;
// console.log(mult);

// var div = num1 / num2;
// console.log(div);

//-----------------------------
// var user=prompt("Name: ");
// alert('Welcome ' + user);

// var num1 = parseInt(prompt("Enter a num1: "));
// var num2 = parseInt(prompt("Enter a num2: "));

// var sum = num1 + num2;
// console.log(sum);

// var rest = num1 - num2;
// console.log(rest);

// var mult = num1 * num2;
// console.log(mult);

// var div = num1 / num2;
// console.log(div);

//--------------
// var user = prompt("Name: ");
// alert('Welcome ' + user);

// 

// var email = prompt("Enter your email");

// var n = email.includes('@');
// var number = 10;
// var string = "10";



// var number1 = parseInt(prompt("Enter number 1"));
// var number2 = parseInt(prompt("Enter number 2"));

// if(number1 > number2) {
//     console.log("First number is greater than second number");
// }
// else if (number2 > number1) {
//     console.log("2nd number is greater than first number");
// }
// else {
//     console.log("numbers are equal.");
// }



// console.log(n);
//3 equals me Same Data type and same value
// if(n===true){
//     console.log("Correct email address");
// }
// else{
//     console.log("Type again");
// }

let names = ['Chad', 'Marlo', true, 'Efren', 'Marquis', 'Kenneth', 10];
//console.table(names);
var position = 2;
//console.log(names[position]);
var ages = [30,32,99,88,44,12,77];
var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.table(days);

var matriz = new Array(4);

for (var j = 0; j < matriz.length; j++) {
    matriz[j] = new Array(2);
}

matriz[0][0] = 10;
matriz[0][1] = 1;
matriz[1][0] = 12;
matriz[1][1] = 2;

console.log(matriz[0][0]);
console.log(matriz[0][1]);
console.log(matriz[1][0]);
console.log(matriz[1][1]);

// for (var j = 0; j < matriz.length)
// matriz.forEach(j => {
//     console.log(j);
// });
// matriz[0] = new Array(2);
// matriz[0] = new Array(2);
// matriz[0] = new Array(2);
// matriz[0] = new Array(2);

// for(position = 0; position < names.length; position++) {
//     console.log(names[position]);
//     alert(names[position] + " " + ages[position]);
// }

// names.forEach(element => {
//     console.log(element);
// });