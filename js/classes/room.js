export class Room {
  constructor(type, size, hasWindows, equipment) {
    this.type       = type;
    this.size       = size;
    this.hasWindows = hasWindows;
    this.equipment  = ['esterillas', ...equipment];
  };
   listEquipment() {
    return this.equipment;
  };
};
