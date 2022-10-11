'use strict';


const { Node } = require('../index');
const { BinaryTree } = require('../index');

describe('Testing largest Element Method', () => {
  let binaryTree = new BinaryTree();
  it('returns null if no data is present', () => {
    expect(binaryTree.root).toBeNull();
  });

  test('Root has a value when a new Node is instantiated on it', () => {
    binaryTree.root = new Node(4);
    expect(binaryTree.root.value).toEqual(4);
  });

  test('Multiple nodes can be added to the binaryTree by referencing Node properties', () => {
    binaryTree.root.left = new Node(7);
    binaryTree.root.right = new Node(5);
    binaryTree.root.left.left = new Node(2);
    binaryTree.root.left.right = new Node(6);
    binaryTree.root.left.right.left = new Node(5);
    binaryTree.root.left.right.right = new Node(11);
    binaryTree.root.right.right = new Node(9);
    binaryTree.root.right.right.left = new Node(4);
  });

  it('Finds max value in binaryTree', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.right = new Node(11);
    expect(binaryTree.largestElement()).toEqual(11);
  });

  it('Finds max value in binaryTree with many nodes', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.right = new Node(11);
    binaryTree.root.right.left = new Node(4);
    expect(binaryTree.largestElement()).toEqual(11);
  });
});
