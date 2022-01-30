function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

/**
 * When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
 * 
 * manually set the constructor property of Bird to the Bird object:
 */
Bird.prototype.constructor = Bird;  
Dog.prototype.constructor = Dog;

Bird.prototype.fly = ()=>{
    console.log("birds fly");
}


let duck = new Bird();
let beagle = new Dog();

duck.fly();



/**
 * A common pattern in JavaScript is to execute a function as soon as it is declared:
 */
(function () {
    console.log("A cozy nest is ready");
})();