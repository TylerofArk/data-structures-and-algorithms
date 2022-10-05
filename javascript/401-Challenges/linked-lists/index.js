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

  kthFromEnd(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    let result = length - k;
    if (result < 1 || result > length) return 'Exception';
    current = this.head;
    for (let i = 1; i < result; i++) {
      current = current.next;
    }
    return current.value;
  }

  zipList(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let outputList = new LinkedList();

    while (current1 || current2) {
      if (current1) {
        outputList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        outputList.append(current2.value);
        current2 = current2.next;
      }
    }
    return outputList;
  }


let list1 = new LinkedList();
// add head to list
list.add(1);
list.add(3);
list.add(5);
list.add(7);
list.add(9);

let list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);
list2.add(8);
list2.add(10);

console.log('ziplist', zipList(list, list2).toString());

module.exports = LinkedList;
