'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  let list = new LinkedList;
  let newList = new LinkedList;


  test('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    list.insert('v');
    expect(list.head).toBeTruthy();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toBe('v');
    expect(list.head.next).toBeNull;
  });

  test('Can property insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('l');
    expect(list.head.value).toBe('l');
    expect(list.head.next.value).toBe('a');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    list.insert('u');
    expect(list.includes('u')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('e');
    expect(list.includes(22)).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const testString = `{${'e'}} -> {${'u'}} -> {${'l'}} -> {${'a'}} -> {${'v'}} -> NULL`;
    expect(list.string()).toBe(testString);
  });
  it('Can successfully add a node to the end of the linked list', () => {
    newList.append('test');
    newList.append('x');
    expect(newList.head.next.value).toEqual('x');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    expect(newList.head.next.next).toBeFalsy();
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    newList.insertBefore('test', 'w');
    expect(newList.head.value).toEqual('w');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    newList.insertAfter('test', 'WPS');
    expect(newList.head.next.next.value).toEqual('WPS');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    newList.insertAfter('x', 'a');
    expect(newList.head.next.next.next.next.value).toEqual('a');
  });
});
