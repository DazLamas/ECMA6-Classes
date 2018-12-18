import { Center } from './center.js';
import { Worker } from './worker.js';

export class Gym {
  constructor() {
    this.cif     = "";
    this.name    = "";
    this.centers = new Map([]);
    this.workers = new Map([]);
    this.members = new Map([]);
  }

  registerCenter(cif, address, city, zip, manager) {
    this.centers.set(cif, new Center(cif, address, city, zip, manager));
  }

  removeCenter(centerNif) {
    this.centers.delete(center.nif);
  }

  //Esto es basura...registrar workers y members desde el Centro...
  //y calcular totales de GYM sumando los elementos de cada centro registrado
  //Desde esos métodos, se pueden hacer las comprobaciones de roles (aunque habrá
  //que empezar a registrar los trabajadores por rol de otra forma )
  registerWorker(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center) {

    const newWorker = new Worker(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center);

    this.workers.set(nif, newWorker);

    if (center) {
      center.workers.set(newWorker.nif, newWorker);
      if (newWorker.role === 'manager') {
        center.manager = newWorker.role;
      };
    };
  }

  removeWorker(workerNif) {
    this.workers.delete(worker.nif);
  }

}
