class Plan {
  constructor(number, data, autopay = true) {
    this.number = number;
    this.data = data;
    this.autopay = autopay;
  }
  // Getter

  get row() {
    return this.findRow();
  }

  get autoRow() {
    return this.findAutoRow();
  }

  get button() {
    return this.findButton();
  }

  get column() {
    return this.findColumn();
  }

  get prices() {
    return this.calcPrices();
  }

  get minus() {
    return this.findMinus();
  }
  // Method

  findRow() {
    return document.getElementById(`price-${this.number}`);
  }

  findAutoRow() {
    return document.getElementById(`price-${this.number}-autopay`);
  }

  findButton() {
    return document.getElementById(`col-${this.number}-btn`);
  }

  findColumn() {
    return document.getElementById(`col-${this.number}`);
  }

  findMinus() {
    return document.getElementById(`minus-${this.number}`);
  }

  calcPrices() {
    return this.data;
  }
}

export default Plan;
