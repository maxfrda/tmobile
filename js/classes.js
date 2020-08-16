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
    let discount = 5;
    let i = 0;
    const disPrice = this.data;
    if (this.autopay === true) {
      Object.keys(disPrice).forEach((v) => {
        disPrice[v] -= discount;
        i += 1;
        if (i <= 8) {
          discount += 5;
        }
      });
    }
    return disPrice;
  }
}

export default Plan;
