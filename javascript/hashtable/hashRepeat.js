'use strict';

const { LinkedList } = require('../../linked-list/index');

class HashTableMap {
  constructor(size) {
    this.size = size;
    this.buckets = new LinkedList(size);
  }
  removePunctuation(string) {
    let regex = /[!"#$&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    return string.replace(regex, '');
  }

  repeatedWord() {

    let changeString = this.removePunctuation();
    let smallString = changeString.toLowerCase();
    let mapWord = new Map();
    for (let i of smallString('')) {
      if (mapWord.has(i)) {
        mapWord.set(i, mapWord.get(i) + 1);
      }
      else mapWord.set(i, 1);
      if (mapWord.get(i) > 1)
        return i;
    }
    return 'No repeated word';
  }
}

module.exports = HashTableMap;
