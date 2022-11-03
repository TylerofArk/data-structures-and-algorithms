'use strict';

// Setting a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully returns a list of all unique keys that exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value


const HashTable = require('../HashCode/hashtable.js');

describe('HashTable Implementation:', () => {
  let testHash = new HashTable(1024);

  it('Sets a key/value to your hashtable results in the value being in the data structure', () => {
    testHash.set('key', 'Value');
    expect(testHash.buckets).toEqual(expect.arrayContaining([expect.anything()]));
  });

  it('Retrieves based on a key returns the value stored', () => {
    let amount = testHash.get('Key');
    expect(amount).toBe('Value');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let amount = testHash.get('incorrect value');
    expect(amount).toBe(null);
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let keysTest = testHash.keys();

    expect(keysTest.includes('Key')).toBe(true);
  });
});
