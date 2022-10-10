'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    // in javascript this WORKS!
    this.children = [];
    // other languages maybe - also, this is valid JavaScript
    // this.children = new Array(k).fill(null);
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() { // THIS TRAVERSAL - learn to traverse like you learned linked list... MUSCLE MEMORY
    // recursive helper function
    const traverse = (node) => {
      // base case - DO THE THING
      console.log(node.value);
      // recursive cases  ONE WAY
      // looks left if there is left node and serves as an "eject" if no left node exists
      if (node.left) {
        traverse(node.left);
      }
      // looks right if there is right node and serves as an "eject" if no right node exists
      if (node.right) {
        traverse(node.right);
      }
      // // recursive cases  ANOTHER WAY
      // if (node.left) traverse(node.left);
      // if (node.right) traverse(node.right);
    };
    // start the recursive "party"
    traverse(this.root);
  }
  inOrder(){
    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      // do thing IN ORDER
      console.log(node.value);
      if (node.right) traverse(node.right);
    };
    // get the recursive party started
    traverse(this.root);
  }
  postOrder(){
    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // do thing POST ORDER
      console.log(node.value);
    };
    // get the recursive party started
    traverse(this.root);
  }
  add(value) {
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if(value > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      } else if (value < current.value) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else {
        throw new Error('Value exists');
      }
    }
  }
  contains(value) {
    const traverse = (node) => {
      if(!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return traverse(node.left);
      } else {
        return traverse(node.right);
      }
    };
    return traverse(this.root);
  }
}
module.exports = {
  Node,
  KaryNode,
  BinaryTree,
};
