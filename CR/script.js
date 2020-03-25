class Character {
    constructor(image,name,energy,hp,id){
        this.name=name;
        this.energy=energy;
        this.hp=hp;
        this.id=id;
        this.image=image
    }
    display = function () {
        document.getElementById("img" + this.id).innerHTML=`<img class="character" src="${this.image}">`;
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> HP:${this.hp}`;
    }

    attack = function(opponent){
        var newEnergy = opponent.energy - this.hp;
        opponent.energy=newEnergy;
        console.log(opponent.energy);
        opponent.display();
    }
}

const c1 = new Character("img/pngguru.com (3).png","Red",100,10,"redinfo");
const c2 = new Character("img/pngguru.com (2).png","Yellow",100,8,"yellowinfo");

c1.display();
c2.display();
