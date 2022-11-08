'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();
  }

  // Node/vertex
  addVertex(vert){
    const vertex = new Vertex(vert);
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('Invalid Vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes(){
    let nodes = [];
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      nodes.push(vertex);
    }
    return nodes;
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('Invalid Vertex');
    }
    return [...this._adjacencyList.get(vertex)];
  }

  breadthFirst(startNode){
    if(!startNode){
      return null;
    }
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);
    while(queue.length){
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  size(){
    let size = 0;
    for(let key of this._adjacencyList.keys()){
      size++;
    }
    return size;
  }

}

module.exports = Graph;
