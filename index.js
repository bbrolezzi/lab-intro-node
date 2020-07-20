class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos)) {
      this.items.indexOf(pos);
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
   this.items.reduce((a, b) => Math.max(a, b) ? throw new Error('EmptySortedList'));
  }

  min() {
    this.items.reduce((a, b) => Math.min(a, b) ? throw new Error('EmptySortedList'));
  }

  sum() {
    this.items.reduce((a, b) => a + b);
  }

  avg() {
    this.items.reduce((a, b) => a + b, 0) / this.length);
  }
}

module.exports = SortedList;
