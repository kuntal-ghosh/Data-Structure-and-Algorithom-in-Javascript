class Array {
  constructor() {
    (this.data = {}), (this.length = 0);
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const lastItem = this.data[index];
    this.shifting(index);
    return lastItem;
  }
  shifting(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

const array = new Array();
array.push(1);
array.push(2);
// array.pop();
array.delete(0);
console.log(array);
