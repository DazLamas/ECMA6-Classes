

const altaFit = new Gym();
altaFit.cif  = '324529I';
altaFit.name = 'Alta Fit';
// const timetable = new Timetable(9, 21, 1);


// * Creating and adding new center:
altaFit.createAndAddCenter('324525H', 'Camino de los Vinateros', 'Madrid', '28029');


// * Create new member and assign to its center
const afMoratlaz = altaFit.centers.get("324525H");
afMoratlaz.createAndAddMember('4883583F', 'Raúl', 'Ferraz Escribano', 30, 'hombre', {type: 'full', accessingHours: [9,21]})

//  * Add new worker to its Gym and Center at the same time:
altaFit.createAndAddWorker('232232P', 'Nico', 'Gauss Feet', 28, 'male', 'recepcionista', [9, 18], 1000, afMoratlaz)

// * Creating worker before knowing the center
altaFit.createAndAddWorker('139992C', 'Liz', 'Gauss Feet', 25, 'female', 'manager', [9, 18], 1800);

//After a few days, you know the center in which this worker if going to work:
const workerToAdd = altaFit.workers.get('139992C');
const centerForTheNewWorker = altaFit.centers.get("324525H");

centerForTheNewWorker.workers.set(workerToAdd.nif, workerToAdd);


// afMoratlaz.setManager('Catalina', 'Muñoz Esteban', 43, 'mujer', '3243582C');


// Members:
// afMoratlaz.createAndAddMember('4883583F', 'Raúl', 'Ferraz Escribano', 30, 'hombre');
// afMoratlaz.createAndAddMember('4053344D', 'María', 'Ferraz Escribano', 26, 'no-binario');
// afMoratlaz.removeMember(4883583);


//Rooms:
// const salaPilates = new Room('pilates', 10, true, ["balón medicinal", "espalderas"]);
// const salaCore    = new Room('core', 10, true, ["máquina abdominales", "maquina sentadillas"]);
//
// const class1 = new Class(9, 'pilates', 'nicola');
// const class2 = new Class(10, 'yoga', 'carmen');
// const class3 = new Class(12, 'gap', 'gonzalo');
// const class4 = new Class(14, 'zumba', 'gabriel');
//
// timetable.createTimetable(class1);
// timetable.createTimetable(class2);
// timetable.createTimetable(class3);
// timetable.createTimetable(class4);
//
// console.log(timetable.listTimetable());
//
console.log(altaFit);
console.log(afMoratlaz);
