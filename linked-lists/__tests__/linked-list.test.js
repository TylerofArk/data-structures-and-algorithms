'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  let list = new LinkedList;
  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    list.insert('v');
    expect(list.head).toBeTruthy();
  });
  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toBe('v');
    expect(list.head.next).toBeNull;
  });
  it('Can property insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('l');
    expect(list.head.value).toBe('l');
    expect(list.head.next.value).toBe('a');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    list.insert('u');
    expect(list.includes('u')).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('e');
    expect(list.includes(22)).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const testString = `{${'e'}} -> {${'u'}} -> {${'l'}} -> {${'a'}} -> {${'v'}} -> NULL`;
    expect(list.string()).toBe(testString);
  });
});
