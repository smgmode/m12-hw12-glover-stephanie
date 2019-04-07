//create class with properties passing through
class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
    console.log('Yum');
  }
}

//create a subclass and extend the parent class
class IceCream extends Desserts {
  constructor (type, calories, flavor, scoops) {
  //invoke our parent constructor function passing in any parameters
super(type, calories);
this.flavor = flavor;
this.flavor = scoops;
}
//adding method into the class ClassName
includeSpoon() {
console.log('Here is your spoon!');
}
}


//create a new instance called vanillaIceCream
const vanillaIceCream = new IceCream('Ice Cream', 340, 'Vanilla', 3);

console.log(vanillaIceCream);
//calling the method
vanillaIceCream.includeSpoon();
