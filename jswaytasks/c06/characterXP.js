// add an experience property named xp to the character.
// Its initial value is 0. Experience must appear
// in character description.

// create the character object here
const aurora = {
  name: "Aurora",
  health: 100,
  strength: 10,
  xp: 10,

  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} XP.`;
  },
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
