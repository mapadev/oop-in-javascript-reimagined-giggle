const canWalk = {
    walk: function() {
        console.log("walking...");
    }
};

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("eating...");
    }
};

const canSwim = {
    swim: function() {
        console.log("swimming...");
    }
};

const canFly = {
    fly: function() {
        console.log("flying...");
    }
};

const Person = function() {};
Object.assign(Person.prototype, canWalk, canEat);

const GoldFish = function() {};
Object.assign(GoldFish.prototype, canSwim, canEat);

const person = new Person();
const goldfish = new GoldFish();

console.log(person);
console.log(goldfish);

// We can also create a mixin to simplify code
function mixin(Target, ...sources) {
    Object.assign(Target.prototype, ...sources);
}

const Superman = function() {};

mixin(Superman, canFly, canSwim, canWalk, canEat);

const clarkKent = new Superman();

console.log(clarkKent);
