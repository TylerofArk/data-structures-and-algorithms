'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  string() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    return string + 'NULL';
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;
    if (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue){
    if(!this.head){
      throw new Error('Linked List is Empty');
    }

    if (this.head.value === value){
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while(current){
      // console.log({current, currentNext: current.next})
      if (current.next && current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else{
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  kthFromTheEnd(k){
    let result = null;
    let current = this.head;
    while (k <= this.length && k > 0) {
      result = current.value;
      current = current.next;
      k++;
    }
    return result;
  }
}



module.exports = LinkedList;
