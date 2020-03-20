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