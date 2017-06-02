var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

//-----ES6-----

// class Bee extends Grub {
//   constructor() {
//     super();

//     this.age = 5;
//     this.job = 'Keep on growing';
//     this.color = 'yellow';
//   }
// };