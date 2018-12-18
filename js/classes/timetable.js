export class Timetable {
  constructor() {
    this.openingHour = 9;
    this.closingHour = 21;
    this.frecuency   = 1;
    this.timetable   = new Map([]);
  }
  createTimetable() {

    while (this.frecuency <= (this.closingHour - this.openingHour)) {
      this.timetable.set((this.openingHour + this.frecuency), 'no class');
      this.frecuency++;
    }

  };

  registerClass(classObj) {
    this.timetable.delete(classObj.hour);
    this.timetable.set(classObj.hour, classObj);
  }

  listTimetable() {
    return this.timetable;
  };

  // static hasClass(subject) {
  //    return Object.keys(this.timetable).find(key => this.timetable[key] === subject);
  // };
};
