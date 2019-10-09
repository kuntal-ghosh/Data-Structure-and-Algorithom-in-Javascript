class TreeNode {
  left: TreeNode;
  right: TreeNode;
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }
  insert(value: number) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode: TreeNode = this.root;
      while (true) {
        //left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        //right
        else {
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookUp(value: number) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(10);
tree.insert(2);
tree.insert(7);
tree.insert(100);
console.log(tree);
console.log(tree.lookUp(10));
