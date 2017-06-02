var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function() {
  ForagerBee.prototype.forage.call(this, 'treasure');
};

//-----ES6-----

// class RetiredForagerBee extends ForagerBee {
//   constructor() {
//     super();

//     this.age = 40;
//     this.color = 'grey';
//     this.canFly = false;
//     this.job = 'gamble';
//   }

//   forage() {
//     return 'I am too old, let me play cards instead';
//   }

//   gamble() {
//     this.treasureChest.push('Pollen chips');
//   }
// }