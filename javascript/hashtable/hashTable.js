'use strict';

const { LinkedList } = require('../../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let bucket = this.table[this.hash(key)];
    if (bucket === undefined) {
      bucket = new LinkedList();
      this.table[this.hash(key)] = bucket;
    }
    bucket.insert({ [key]: value });
  }

  get(key) {
    const bucket = this.table[this.hash(key)];
    if (bucket) {
      let current = bucket.head;
      while (current) {
        const value = current.value[key];
        if (value !== undefined) {
          return value;
        }
        else {
          current = current.next;
        }
      }
      return null;
    }
  }

  has(key) {
    return this.key().has(key);
  }

  keys() {
    const keys = new Set();
    this.table.forEach((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          keys.add(Object.keys(current.value)[0]);
          current = current.next;
        }
      }
    });
    return keys;
  }
}

module.exports = HashTable;
