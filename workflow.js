

const alta_fit     = new Gym("Alta Fit", 324529475);
const af_moratalaz = new Center(32842763, "Camino de los Vinateros", "Madrid", 28029);

alta_fit.addCenter(af_moratalaz);
af_moratalaz.setManager('Catalina', 'Muñoz Esteban', 43, 'mujer', 3243582);

af_moratalaz.addMember('Cristina', 'Ferraz Escribano', 37, 'mujer', 4053585);
af_moratalaz.addMember('Raúl', 'Ferraz Escribano', 30, 'hombre', 4883583);
af_moratalaz.addMember('María', 'Ferraz Escribano', 26, 'mujer', 4053344);
af_moratalaz.removeMember(4883583);

const sala_pilates_morata = new PilatesRoom(10, true, ["balón medicinal", "espalderas"]);
const sala_maquinas_morata = new CoreRoom(10, true, ["máquina abdominales", "maquina sentadillas"]);



console.log(alta_fit);
console.log(af_moratalaz);

// console.log(sala_pilates_morata.getTools());
// console.log(sala_maquinas_morata.getTools());


const manager = new Worker(3243582, 'Catalina', 'Muñoz Esteban', 43, 'mujer', 'manager');

const room1 = new PilatesRoom('pilates', 20, true, ['balón medicinal'])
console.log(manager);
console.log(person1);
