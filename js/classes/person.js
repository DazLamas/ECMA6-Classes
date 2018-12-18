export class Person {
  constructor(nif, name, sirname, age, gender) {
    if (new.target === Person) {
     throw new TypeError("This is an Abstract class.");
    }
    this.nif     = nif;
    this.name    = name;
    this.sirname = sirname;
    this.age     = age;
    this.gender  = gender;
  };
};
