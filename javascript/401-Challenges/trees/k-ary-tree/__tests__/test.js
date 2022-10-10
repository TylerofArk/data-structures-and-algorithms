'use strict';

const { Node } = require('../index');
const { KaryNode }  = require('../index');
const { BinaryTree } = require('../index');

describe('Testing Binary Trees and Binary Search Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let binaryTree = new BinaryTree();
    let binarySearchTree = new BinaryTree();
    binaryTree.root = new Node('a');
    binarySearchTree.add('a');
    expect(binaryTree.root.value).toEqual('a');
    expect(binarySearchTree.root.value).toEqual('a');
  });
});
