//ToDo:
// - prohibir instanciar clase
// - añadir métodos: listCenters, listWorkers, listMembers
class Gym {
  constructor() {
    // if (new.target === Gym) {
    //  throw new TypeError("Cannot construct Abstract instances directly.");
    // }
    this.cif     = "";
    this.name    = "";
    this.centers = new Map([]);
    this.workers = new Map([]);
  }

  createAndAddCenter(cif, address, city, zip, manager) {
    this.centers.set(cif, new Center(cif, address, city, zip, manager));
  }

  removeCenter(centerNif) {
    this.centers.delete(center.nif);
  }

  createAndAddWorker(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center) {

    const newWorker = new Worker(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center);

    this.workers.set(nif, newWorker);

    if (center) {
      center.workers.set(newWorker.nif, newWorker);
    };
  }

  removeWorker(workerNif) {
    this.workers.delete(worker.nif);
  }

}

class Center {
  constructor(cif, address, city, zip, manager = 'not registered yet') {
    this.cif     = cif;
    this.address = address;
    this.city    = city;
    this.zip     = zip;
    this.workers = new Map([]);
    this.members = new Map([]);
    // this.manager = manager;
    // this.rooms   = new Set([]);
    // this.classes = new Set([]);
  };

  // setManager(name, sirname, age, gender, nif) {
  //   this.manager = new Manager(name, sirname, age, gender, nif);
  // };

  createAndAddMember(nif, name, sirname, age, gender, memberRef, contractedRates) {
    this.members.set(nif, new Member(nif, name, sirname, age, gender, memberRef, contractedRates));
  };

  removeMember(nif) {
    this.members.delete(nif);
  };

  // addRoom(room) {
  //   this.rooms.add(room);
  // }
  //
  // removeRoom(room) {
  //   this.rooms.delete(room.type);
  // }

};

class Person {
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

class Member extends Person {
  constructor(nif, name, sirname, age, gender, contractedRates) {
    super(nif, name, sirname, age, gender)
    this.memberRef       = nif;
    this.contractedRates = {
      type: contractedRates.type,
      accessingHours: contractedRates.accessingHours
    };
  };
};

class Worker extends Person {
  constructor(nif, name, sirname, age, gender, role, availableHours, monthlySalary, center) {
    super(nif, name, sirname, age, gender)
    this.role  = role;
    this.availableHours = availableHours;
    this.monthlySalary  = monthlySalary;
    this.center         = center;
  };
};
//
// class Room {
//   constructor(type, size, hasWindows, equipment) {
//     this.type       = type;
//     this.size       = size;
//     this.hasWindows = hasWindows;
//     this.equipment  = ['esterillas', ...equipment];
//   };
//    listEquipment() {
//     return this.equipment;
//   };
// };
//
// class Timetable {
//   constructor(open, close, classFrecuency) {
//     this.open           = open;
//     this.close          = close;
//     this.timetable      = new Map([]);
//   };
//   createTimetable(classInfo) {
//     this.timetable.set(classInfo.hour, classInfo.subject)
//   };
//   listTimetable() {
//     return this.timetable;
//   };
//   hasClass(subject) {
//     // return Object.keys(this.timetable).find(key => this.timetable[key] === subject);
//   };
// };
//
// class Class {
//   constructor(hour, subject, room, teacher) {
//     this.hour    = hour;
//     this.subject = subject;
//     this.room    = room;
//     this.teacher = teacher;
//   };
// };
//

//
// class Teacher extends Worker {
//   constructor(nif, name, sirname, age, gender, hours, habilities) {
//     super(nif, name, sirname, age, gender)
//     this.hours = hours;
//     this.habilities = habilities;
//   };
// };
//
