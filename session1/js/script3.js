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