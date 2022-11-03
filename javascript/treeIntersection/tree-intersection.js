'use strict';

const HashTable = require('../hashtable/hashTable');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeHash {
  constructor() {
    this.root = null;
  }

  inOrder1() {
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
  }

  inOrder2() {
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
  }

  treeSet(tree) {
    const hashSet = new HashTable();
    tree.inOrder1((value) => {
      hashSet.set(value, true);
    });
    return hashSet;
  }

  checkTreeFunction(tree, hashSet) {
    const arr = [];
    tree.inOrder1((value) => {
      if (hashSet.get(value)) {
        arr.push(value);
      }
    });
    return arr;
  }

  treeIntersection(tree1, tree2) {
    const hashSet = this.treeSet(tree1);
    const addArray = this.checkTreeFunction(tree2, hashSet);
    return addArray;
  }
}

let tree1 = new BinaryTreeHash();
tree1.root = new Node(150);
tree1.root.left = new Node(100);
tree1.root.right = new Node(250);
tree1.root.left.left = new Node(75);
tree1.root.left.right = new Node(160);
tree1.root.right.right = new Node(350);
tree1.root.right.left = new Node(200);
tree1.root.left.right.left = new Node(125);
tree1.root.left.right.right = new Node(175);
tree1.root.right.right.left = new Node(300);
tree1.root.right.right.right = new Node(500);

let tree2 = new BinaryTreeHash();
tree2.root = new Node(42);
tree2.root.left = new Node(100);
tree2.root.right = new Node(600);
tree2.root.left.left = new Node(15);
tree2.root.left.right = new Node(160);
tree2.root.right.right = new Node(350);
tree2.root.right.left = new Node(200);
tree2.root.left.right.left = new Node(125);
tree2.root.left.right.right = new Node(175);
tree2.root.right.right.left = new Node(4);
tree2.root.right.right.right = new Node(500);


module.exports = { BinaryTreeHash };
