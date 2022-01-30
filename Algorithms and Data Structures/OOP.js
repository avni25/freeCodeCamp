
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
console.log(myHouse instanceof House); //instanceof

function Bird(name) {
    let weight = 20;
    this.name = name;
    this.numLegs = 2;
    this.getWeight = ()=>{
        return weight;
    }

}

/**
 * prototype ile nesnenin disindan da property eklenibilir. 
 */
Bird.prototype.color = 2; 

let canary = new Bird("Tweety");
let ownProps = [];
console.log(`canary's legs: ${canary.numLegs}`)
console.log(`weight: ${canary.getWeight()}`);
console.log(`weight: ${canary.weight}`);
/**
 * olusturulan nesne dongude kullanılıdgında nesnenin ozelliklerini sayar
 */
for(let p in canary){
    ownProps.push(p)
}

console.log(ownProps);
/**
 * to check which oobject it belongs
 * it is used constructor
 */
if(canary.constructor === Bird){
    console.log("canary is a Bird Object")
}else{ console.log("canary is not a Bird Object")}

/**
 * adding multiple properties with prototype
 * 
 * There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
 * o fix this, whenever a prototype is manually set to a new object, remember to define the constructor property
 */
 
Bird.prototype={
    constructor: Bird,
    eyes: 2,
    eat: ()=>{
        console.log("bird is eating")
    }
}

let peagon = new Bird("jonathan")
for(let p in peagon){
    console.log(p);
}

/**
 * INHERİTANCE Behaviors from a Supertype
 * 
 */
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  run: function() {
    console.log("nom nom nom");
  }
};
//Object.create(obj) creates a new object, and sets obj as the new object's prototype.
let duck = Object.create(Animal.prototype);
console.log(duck instanceof Animal); //true
/**
 * asagidaki satirla Bird sinifi Animal sinifini extend ediyor. Animal sinifinin buutn ozelliklerini kullanabiliyor
 */
Bird.prototype = Object.create(Animal.prototype);

let penguin = new Bird("aa");
penguin.run();