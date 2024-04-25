export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.consttructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        return new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
