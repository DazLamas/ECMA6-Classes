import { Person } from './person.js';

export class Teacher extends Worker {
  constructor(nif, name, sirname, age, gender, hours, habilities) {
    super(nif, name, sirname, age, gender)
    this.hours = hours;
    this.habilities = habilities;
  };
};
