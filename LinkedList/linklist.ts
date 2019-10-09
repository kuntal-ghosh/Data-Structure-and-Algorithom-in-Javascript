interface NodeLink {
  value: number;
  next?: NodeLink;
}
class LinkNode {
  constructor(value: number) {
    value: value;
    next: null;
  }
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
    return this;
  }

  prepend(value: number) {
    const newNode: NodeLink = {
      value: value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index: number, value: number) {
    if (index >= this.length) {
      this.append(value);
    }
    const newNode: NodeLink = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1);
    const shiftNode = leader.next;
    leader.next = newNode;
    newNode.next = shiftNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myLinkedList: LinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(100);
myLinkedList.insert(2, 200);
// console.log(myLinkedList.printList());
// myLinkedList.printList();
