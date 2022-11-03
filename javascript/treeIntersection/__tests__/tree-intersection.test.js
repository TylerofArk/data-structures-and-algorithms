'use strict';

const {checkTreeFunction, treeIntersection} = require('../index');

describe('tree implementation', () => {

  const addArray = checkTreeFunction();

  test('Compare the hash set to the the second tree nodes', () => {
    expect(addArray).toContain(100);
    expect(addArray).toContain(160);
    expect(addArray).toContain(125);
    expect(addArray).toContain(175);
    expect(addArray).toContain(200);
    expect(addArray).toContain(350);
    expect(addArray).toContain(500);
  });

  test('Combine both functions form the solution', () => {
    const addArray = treeIntersection();
    expect(addArray).toContain(100);
    expect(addArray).toContain(160);
    expect(addArray).toContain(125);
    expect(addArray).toContain(175);
    expect(addArray).toContain(200);
    expect(addArray).toContain(350);
    expect(addArray).toContain(500);
  });
});
