'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('kth tests', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);

  test('Where k is greater than the length of the linked list', () => {
    expect(newList.kthFromEnd(8)).toEqual('Exception');
  });

  test('Where k and the length of the list are the same', () => {
    expect(newList.kthFromEnd(5)).toEqual('Exception');
  });

  test('Where k is not a positive integer', () => {
    expect(newList.kthFromEnd(-8)).toEqual('Exception');
  });

  test('Where the linked list is of a size 1', () => {
    let size = new LinkedList();
    size.insert(1);
    expect(size.kthFromEnd(5)).toEqual('Exception');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(newList.kthFromEnd(1)).toEqual(1);
  });
});
