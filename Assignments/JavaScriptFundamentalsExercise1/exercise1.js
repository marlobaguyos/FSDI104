var sum = 0;
var score = [80, 70, 60, 90, 95, 85, 75];

score.forEach(myFunction);

function myFunction(i) {
    alert(i);
    sum += i;
}

var average = sum/score.length;
alert("Average Score is: " + average);
console.log(average);

