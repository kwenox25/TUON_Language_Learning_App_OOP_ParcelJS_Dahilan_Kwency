class Guitar {
  constructor(
    //Define paramaters
    brand,
    model,
    color,
    strings,
    pickupsNeck,
    pickupsBridge
  ) {
    //Define properties
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.strings = strings;
    this.pickups = {
      neck: pickupsNeck,
      bridge: pickupsBridge,
    };
  }
  // Add methods like normal functions:
  strum() {
    let p = document.createElement("p");
    p.textContent = `${this.strings} strings are strumming on this ${this.brand} ${this.model}`;
    document.body.appendChild(p);
  }
}

export default Guitar;

class BassGuitar extends Guitar {
  constructor() {
    super(
      "Fender",
      "Jazzmaster",
      "Black",
      4,
      "62 Precision Bass Pickup",
      "62 Precision Bass Pickup"
    );
  }

  slapDaBass() {
    let p = document.createElement("p");
    p.textContent = `Slappin this ${this.brand} ${this.model}`;
    document.body.appendChild(p);
  }
}

class Keytar extends Guitar {
  constructor(brand, model, color, strings, pickupsNeck, pickupsBridge, keys) {
    super(brand, model, color, strings, pickupsNeck, pickupsBridge);

    this.keys = keys;
  }
  slide() {
    let p = document.createElement("p");
    p.textContent = `Sliding my fingers across ${this.brand} ${this.model}`;
    document.body.append(p);
  }
}

export { Guitar, BassGuitar, Keytar };
