'user strict';

const insertionSort = require('../insertionSort');

describe('can successfully sort', () => {
  it('an array in numerical order', () => {
    let array = insertionSort([8,4,23,42,16,15]);
    expect(array).toEqual([4,8,15,16,23,42]);
  });
});
