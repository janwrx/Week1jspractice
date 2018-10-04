function createCar (myMake, myYear, myColor, mySpeed) {
  return {
    make: myMake,
    year: myYear,
    color: myColor,
    speed: mySpeed,
    getCar: function () {
      return this.make+' '+this.year+' '+this.color
    },
    getSpeed: function() {
      return this.speed;
    },
    accelerate: function() {
      if (this.speed < 75) {
        this.speed += 10;
      } else {
        this.speed = 85;
        console.log("SLOW DOWN! You're going too fast! SPEED LIMIT IS 85!!!!");
      }
    },
    brake: function() {
      this.speed -= 7;
    }
  }
}

var myCar = createCar("Mazda", 2011, "black", 99);
// console.log(myCar.getCar());
// console.log(myCar.getSpeed());
// myCar.accelerate();
// console.log(myCar.getSpeed());
// myCar.brake();
// console.log(myCar.getSpeed());

// console.log(myCar.getSpeed());
//
// while (myCar.speed < 50) {
//   myCar.accelerate();
// }
//
// console.log(myCar.getSpeed());
//
// while (myCar.speed > 0) {
//   if (myCar.speed < 7) {
//       myCar.speed -= myCar.speed;
//   } else {
//     myCar.brake();
//   }
// }
//
// console.log(myCar.getSpeed());
//
// while (myCar.speed > 85) {
//
// }

myCar.speed = 76;
myCar.accelerate();
// myCar.brake()
console.log(myCar.speed);
