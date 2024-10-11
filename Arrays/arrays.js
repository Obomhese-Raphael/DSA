class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(item) {
    return this.data[item];
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  delete(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  indexOf(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
    return -1;
  }

  join(item) {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i] + item;
    }
    return result.slice(0, -item.length);
  }
  reverse() {
    for (let i = 0, j = this.length - 1; i < j; i++, j--) {
      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
    }
  }
}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.push("pear");
myNewArray.push("banana");
myNewArray.push("guava");
myNewArray.push("peach");
myNewArray.join("-");
const reversedArray = myNewArray.reverse();

myNewArray.pop();

console.log(myNewArray);
console.log(reversedArray);
console.log(myNewArray.shift());
console.log(myNewArray);
console.log(myNewArray.delete(1));
console.log(myNewArray);
console.log(myNewArray.indexOf("pear"));
console.log(myNewArray);
