'use strict';

const leftJoin = (hashMap1, hashMap2) => {

  let arr = [];

  if (hashMap1.size > 0 && hashMap2.size > 0) {
    hashMap1.forEach((value, key) => {
      let join = [key, value];
      hashMap2.get(key)
        ? join.push(hashMap2.get(key))
        : join.push(null);
      arr.push(join);
    });

    return arr;

  }
};

module.exports = leftJoin;
