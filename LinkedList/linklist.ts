interface NodeLink {
  value: number;
  next?: NodeLink;
}
class LinkedList {
  head: NodeLink;
  tail: NodeLink;
  length: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    const newNode: NodeLink = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number) {
    const newNode: NodeLink = {
      value: value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
  }
}

const myLinkedList: LinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(100);
console.log(myLinkedList);
