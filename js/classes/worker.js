import { Person } from './person.js';

export class Worker extends Person {
  constructor(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center) {
    super(nif, name, sirname, age, gender)
    this.role           = role;
    this.availableHours = availableHours;
    this.monthlySalary  = monthlySalary;
    this.center         = center;
  };
};
