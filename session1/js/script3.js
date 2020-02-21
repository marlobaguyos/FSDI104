//object literal

const person1 = {

    //attributes name= value
    name: 'Samantha',
    age: 30,
    job: 'true',
    music:["REM", "Coldplay", "The Beatles"],
    address: {
        street: 'Calz Tecnologico',
        number: '262'
    },
    birthday:function(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

const person2 = {
    name: 'Sergio',
    age: 35,
    job: true,
    birthday:function(){
        let date = new Date();
        return date.setFullYear() - this.age;
    }
}
console.log(person1.birthday());
console.log(person2.birthday());

//object constructor
class Person {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

const p1 = new Person('Pavel', 25);
const p2 = new Person('John', 28);
const p3 = new Person('Marlo', 30);
const p4 = new Person('Jose', 32);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

class tasks{
    constructor(name, priority, date){
        this.name = name;
        this.priority = priority;
        this.date = date;
    }
}

const t1 = new tasks('Exam', 'High', '02/19/2020');
const t2 = new tasks('HW', 'Medium', '02/19/2020');
const t3 = new tasks('TTH', 'low', '02/20/2020');

// console.log(t1);
// console.log(t2);

// const tasks = [t1, t2, t3];

// console.table(tasks);

// document.getElementById('x').innerHTML=`<p>${t1.name} ${t1.prioty} ${t1.date}<p/>`;
// document.getElementById('x').innerHTML=`<p>${t2.name} ${t2.prioty} ${t2.date}<p/>`;

// var text="";

// for(var i=0;i<tasks.length;i++){
//     text += `<h2> ${tasks[i].name} ${tasks[i].priority} ${tasks[i].date} </h2>`;
// }

// console.log(text);

// document.getElementById('x').innerHTML=text;

// const client = {
//     name: 'John',
//     type: 'Premium',
//     data: {
//         location:{
//             country: 'Mexico',
//             city: 'TJ'
//         },
//         account:{
//             date:2010,
//             number:'98574'
//         }
//     }
// }

// let{data:{account:{number}}}=client;
// let{name}=client;
// let{type}=client;
// let{data:{location:{country}}}=client;

// console.log(name);
// console.log(number);
// console.log(type);

//object destructuring
class Student{
    constructor(name,points,grade){
        this.name=name;
        this.points=points;
        this.grade=grade;
    }
}

const s1 = new Student("Larry", 900, "A-");
const s2 = new Student("Jose", 750, "B+");
const s3 = new Student("Edward", 980, "A");
const s4 = new Student("Eli", 500, "F");
const S5 = new Student("John", 949, "A-");
const s6 = new Student("Cody", 850, "B+");
const s7 = new Student("Chad", 1000, 'A');

const students = [s1, s2, s3, s4, s5, s6, s7];

const best = students.filters(students => students.points>800);
console.log(best);

const cody = students.find(students => students.name === 'Cody');
console.log(cody);

const total = students.reduce(total,students)=>total+students.points,0);
console.log(total/students.length);







