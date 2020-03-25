class Character {
    constructor(name,energy,hp){
        this.name=name;
        this.energy=energy;
        this.hp=hp;
    }
    display = function () {
        document.getElementById("redinfo").innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> HP:${this.hp}`;

    }
}

const c1 = new Character("Red",100,10);
const c2 = new Character("Yellow",100,8);

c1.display(redinfo);