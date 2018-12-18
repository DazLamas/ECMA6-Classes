import { Gym } from './classes/gym.js';
import { Center } from './classes/center.js';
import { Classes } from './classes/class.js';
import { Member } from './classes/member.js';
import { Person } from './classes/person.js';
import { Room } from './classes/room.js';
import { Teacher } from './classes/teacher.js';
import { Timetable } from './classes/timetable.js';
import { Worker } from './classes/worker.js';

const altaFit = new Gym();
altaFit.cif   = '324529I';
altaFit.name  = 'Alta Fit';


// * Creating and adding new center:
altaFit.registerCenter('324525H', 'Camino de los Vinateros', 'Madrid', '28029');


// * Create new member and assign to its center
const afMoratlaz = altaFit.centers.get("324525H");
afMoratlaz.registerMember('4883583F', 'Raúl', 'Ferraz Escribano', 30, 'hombre', {type: 'full', accessingHours: [9,21]})

//  * Add new worker to its Gym and Center at the same time:
altaFit.registerWorker('232232P', 'Nico', 'Gauss Feet', 28, 'male', 'recepcionista', [9, 18], 1000, afMoratlaz)

// * Creating worker before knowing the center
altaFit.registerWorker('139992C', 'Liz', 'Gauss Feet', 25, 'female', 'manager', [9, 18], 1800);

//After a few days, you know the center in which this worker if going to work:
const workerToAdd = altaFit.workers.get('139992C');
const centerForTheNewWorker = altaFit.centers.get("324525H");

// * Creating Members:
afMoratlaz.registerMember('4883583F', 'Raúl', 'Ferraz Escribano', 30, 'hombre', {type: 'full', accessingHours: [9,21]});
afMoratlaz.registerMember('4053344D', 'María', 'Ferraz Escribano', 26, 'no-binario', {type: 'full', accessingHours: [9,21]});
afMoratlaz.removeMember(4883583);
centerForTheNewWorker.workers.set(workerToAdd.nif, workerToAdd);


//Rooms:
const salaPilates = new Room('pilates', 10, true, ["balón medicinal", "espalderas"]);
const salaCore    = new Room('core', 10, true, ["máquina abdominales", "maquina sentadillas"]);



const class1 = new Classes(9, 'pilates', 'nicola');
const class2 = new Classes(10, 'yoga', 'carmen');
const class3 = new Classes(12, 'gap', 'gonzalo');
const class4 = new Classes(14, 'zumba', 'gabriel');
const timetable = new Timetable();
timetable.createTimetable();
timetable.registerClass(class1);
timetable.registerClass(class2);
timetable.registerClass(class3);
timetable.registerClass(class4);

// console.log(timetable.listTimetable());

console.log(altaFit);
console.log(afMoratlaz);
console.log(timetable);
