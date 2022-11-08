'use strict';

const Graph = require('.');

describe('Graph Tests', () => {

  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();
    expect(graph.addVertex('A')).toEqual({ 'value': 'A' });

  });

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    graph.addEdge(A, B);

    expect(graph.getNeighbors(A)).toEqual([{ 'vertex': { 'value': 'B' }, 'weight': 0 }]);

  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    expect(graph.getNodes()).toEqual([{ 'value': 'A' }, { 'value': 'B' }, { 'value': 'C' }, { 'value': 'D' }]);

  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(A, B);

    expect(graph.getNeighbors(A)).toEqual([{ 'vertex': { 'value': 'D' }, 'weight': 0 }, { 'vertex': { 'value': 'C' }, 'weight': 0 }, { 'vertex': { 'value': 'B' }, 'weight': 0 }]);

  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');
    graph.addEdge(A, D);
    graph.addEdge(A, C);
    graph.addEdge(A, B);
    let neighbors = graph.getNeighbors(A);

    expect(graph.getNeighbors(A)).toEqual([{ 'vertex': { 'value': 'D' }, 'weight': 0 }, { 'vertex': { 'value': 'C' }, 'weight': 0 }, { 'vertex': { 'value': 'B' }, 'weight': 0 }]);
    expect(neighbors[0].weight).toEqual(0);

  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    expect(graph.size()).toEqual(4);

  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    graph.addEdge(A, A);

    expect(graph.getNodes()).toEqual([{ 'value': 'A' }]);

  });

});
