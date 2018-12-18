import { Person } from './person.js';

export class Member extends Person {
  constructor(nif, name, sirname, age, gender, contractedRates) {
    super(nif, name, sirname, age, gender)
    this.memberRef       = nif;
    this.contractedRates = {
      type: contractedRates.type,
      accessingHours: contractedRates.accessingHours
    };
  };
};
