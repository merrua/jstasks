// create the dog object here

const dog = {
  name: "toby",
  species: "dog",
  size: "medium",
  bark() {
    return "woof";
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
