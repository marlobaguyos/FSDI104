class Character {
    constructor(image,name,health,atkpwr,id){
        this.name=name;
        this.health=health;
        this.atkpwr=atkpwr;
        this.id=id;
        this.image=image;
    }
    display = function () {
        document.getElementById("img" + this.id).innerHTML=`<img class="character" src="${this.image}">`;
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Health: ${this.health} <br> Attack Power:${this.atkpwr}`;
    }

    attack = function(opponent,item){
        var newHealth = opponent.health - item.imagic;
        opponent.health=newHealth;
        opponent.display();
        document.getElementById('console').innerHTML=`Drink a ${item.iname} <br> <img src="${item.img}" <br> <br> ${this.name} is Attacking ${opponent.name}`;


        if (opponent.health < 0) {
            document.getElementById('console').innerHTML=`Alcohol is Bad for you!!! <br> Game Over!`;
        }
    }
}

const c1 = new Character("img/pngguru.com (3).png","Red",100,0,"redinfo");
const c2 = new Character("img/pngguru.com (2).png","Yellow",100,0,"yellowinfo");

c1.display();
c2.display();

class Item{
    constructor(iname,imagic,img){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
    }
}

const item1 = new Item("vodka",5,'img/vodka.png');
const item2 = new Item("beer",10,'img/beer.png');
const item3 = new Item("tequila",20,'img/tequila.png');

var items = [item1, item2, item3];

function select(){
    let selection = Math.floor(Math.random() * 3);
    return items[selection];
}

console.log(select());
