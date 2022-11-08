# Graph

## Credit/ Collab

Worked on this with Luis Rosales and Brandon Pitts and used demo code

## Challenge

- Implement your own Graph. The graph should be represented as an adjacency list.

## Approach & Efficiency

- Utilized the Single-responsibility principle: methods are clean, reusable, abstract component parts to the whole challenge.
- Big O for this problem is time: O(n) space: O(n)

## API

### add node

- Arguments: value
- Returns: The added node
- Add a node to the graph

### add edge

- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph

### get nodes

- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
- Empty collection returned if there are no nodes

### get neighbors

- Arguments: node
- Returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection
- Empty collection returned if there are no nodes

### size

- Arguments: none
- Returns the total number of nodes in the graph
- 0 if there are none
