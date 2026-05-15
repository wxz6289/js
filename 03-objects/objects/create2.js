var Animal, cat, dog;

Animal = function(inLove) {
    this.lovesHumans = inLove || false;
};

cat = new Animal();
dog = new Animal(true);

console.log(cat.lovesHumans);
console.log(dog.lovesHumans);
console.log(cat.constructor);
console.log(dog.constructor);

try {
    console.log(cat.jump());
} catch(e) {
  //  console.log(e);
}

Animal.prototype.jump = function() {
    return 'how high？';
};

console.log(cat.jump());
console.log(dog.jump());

cat.jump = function() {
    return 'no';
};

console.log(cat.jump());
console.log(dog.jump());
