// 1 - Vamos a elaborar un sistema telemático para gestionar una red de Gimnasios, lo iremos ampliando poco a poco en futuros ejercicios.
//
// Lo primero que debes hacer es crear las siguientes clases:
//
// Gimnasio - nombre, CIF, centros (conjunto de gimnasios distribuidos por el país).
// Centro - dirección, localidad, código postal, gerente (Persona), socios (Socio). // añadirsocio eleminarsocio

// Persona - nombre, apellido, edad, sexo, NIF.
// Socio - Similar a la persona pero además contendrá númeroSocio.
// El número de socio se debe asignar automáticamente cada vez que se añade un socio nuevo al Centro.


class Gym {//abstracta!!!!
  constructor(name, cif) {
    this.cif     = cif;
    this.name    = name;
    this.centers = new Map([]);
  }

  addCenter(center) {
    this.centers.set(center.nif, center);
  }

  removeCenter(centerNif) {
    this.centers.delete(center.nif);
  }

}

class Center {
  constructor(cif, address, city, zip, manager = 'no registered yet') {
    this.cif     = cif;
    this.address = address;
    this.city    = city;
    this.zip     = zip;
    this.manager = manager;
    this.members = new Map([]);
  };

  setManager(name, sirname, age, gender, nif) {
    this.manager = new Worker(name, sirname, age, gender, nif);
  };

  addMember(name, sirname, age, gender, nif, memberRef) {
    this.members.set(nif, new Member(name, sirname, age, gender, nif, memberRef));
  };

  removeMember(nif) {
    this.members.delete(nif);
  };

};

class Person {
  constructor(nif, name, sirname, age, gender) {
    this.nif     = nif;
    this.name    = name;
    this.sirname = sirname;
    this.age     = age;
    this.gender  = gender;
  };
};

class Room {
  constructor(type, size, hasWindows, equipment) {
    this.type       = type;
    this.size       = size;
    this.hasWindows = hasWindows;
    this.equipment  = ['esterillas', ...equipment];
  };
   getTools() {
    return this.equipment;
  };
};

class Worker extends Person {
  constructor(nif, name, sirname, age, gender, role){ //Necesario para declarar las propiedades de una clase
    super(nif, name, sirname, age, gender) //Llama a las propiedades de la clase padre
    this.role = role;
  }
};

class Member extends Person {
  constructor(nif, name, sirname, age, gender, memberRef) {
    super(nif, name, sirname, age, gender)
    this.memberRef = memberRef;
  };
};

class PilatesRoom extends Room {

};

class CoreRoom extends Room {

};
