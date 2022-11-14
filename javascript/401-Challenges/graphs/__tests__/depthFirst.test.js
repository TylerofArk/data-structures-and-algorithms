'use strict';

const depthFirst = require('../index');

describe('depthFirst', () => {
  it('should return a set of every node visited', () => {
    const graph = {
      a: ['b', 'c', 'd'],
      b: ['a', 'd'],
      c: ['a', 'e'],
      d: ['a', 'b'],
      e: ['c'],
      f: ['g'],
      g: ['f'],
    };

    const nodes = depthFirst(graph, 'a');
    expect(nodes).toEqual(new Set(['a', 'b', 'd', 'c', 'e']));
  });

});
