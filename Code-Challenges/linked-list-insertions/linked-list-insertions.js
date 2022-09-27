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

  appendToEnd() {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    } else return null;
  }

  insertBefore(data) {
    if (!this.head) {
      this.head = new Node(data, this.head);
    }
  }

  insertAfter(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.appendToEnd();
      current.next = new Node(data);
    }
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

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    return string + 'NULL';
  }
}

module.exports = LinkedList;
