import Bowerman from './characters/Bowerman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Zombie from './characters/Zombie';

const bowerman = new Bowerman('Robin', 'Bowerman');
const swordsman = new Swordsman('Arthur', 'Swordsman');
const magician = new Magician('Merlin', 'Magician');
const daemon = new Daemon('Azazel', 'Daemon');
const undead = new Undead('Vlad', 'Undead');
const zombie = new Zombie('Zed', 'Zombie');

console.log(bowerman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
