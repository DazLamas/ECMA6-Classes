import { Member } from './member.js';

export class Center {
  constructor(cif, address, city, zip, manager = 'not registered yet') {
    this.cif     = cif;
    this.address = address;
    this.city    = city;
    this.zip     = zip;
    this.workers = new Map([]);
    this.members = new Map([]);
    // this.manager = this.setManager(worker);
    // this.rooms   = new Set([]);
    // this.classes = new Set([]);
  };

  // setManager(worker) {
  //   this.manager = worker;
  // };

  registerMember(nif, name, sirname, age, gender, memberRef, contractedRates) {
    this.members.set(nif, new Member(nif, name, sirname, age, gender, memberRef, contractedRates));
  };

  removeMember(nif) {
    this.members.delete(nif);
  };

  addRoom(room) {
    this.rooms.add(room);
  }

  removeRoom(room) {
    this.rooms.delete(room.type);
  }

};
