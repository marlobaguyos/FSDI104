// object literal {}

const person1 = {
    //attributes name = value
    name: 'Samantha',
    age: 34,
    job: 'Professor',
    music: ["REM", "Coldplay", "The Beatles"], //arrays []
    address: {
        street: 'Calz Tecnologico',
        number: '262'
    },
    birthday: function () {
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

const person2 = {
    name: 'Sergio',
    age: 35,
    job: true,
    birthday: function () {
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

console.log(person1.birthday());
console.log(person2.birthday());

//object contructor

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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

class Tasks {
    constructor(name, priority, date) {
        this.name = name
        this.priority = priority;
        this.date = date;
    }
}

const t1 = new Tasks('Exam', 'High', '02/19/2020');
const t2 = new Tasks('HW','Medium', '02/18/2020');
const t3 = new Tasks('TTH', 'low', '02/20/2020');

console.log(t1);
console.log(t2);