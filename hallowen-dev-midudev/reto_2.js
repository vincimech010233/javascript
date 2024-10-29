function battleHorde(zombies, humans) {
    zombies = zombies.split('').map(Number);
    humans = humans.split('').map(Number);
  
    for (let i = 0; i < zombies.length; i++) {
      let zAttack = zombies[i];
      let hAttack = humans[i];
  
      if (zAttack > hAttack) {
        if (i + 1 < zombies.length) {
          zombies[i + 1] += zAttack;
        }
      } else if (hAttack > zAttack) {
        if (i + 1 < humans.length) {
          humans[i + 1] += hAttack;
        }
      }
    }
  
    let zombiePower = zombies[zombies.length - 1];
    let humanPower = humans[humans.length - 1];
  
    if (zombiePower > humanPower) {
      return zombiePower + 'z';
    } else if (humanPower > zombiePower) {
      return humanPower + 'h';
    } else {
      return 'x';
    }
  }



const zombies = '242';
const humans = '334';
console.log(battleHorde(zombies, humans));  // -> "2h"
