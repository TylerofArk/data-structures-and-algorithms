'use strict';

const Node = require('./node.js');

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let addNode = new Node(value);
    let currentBack = this.back;

    if(currentBack){
      currentBack.next = addNode;
    }

    this.back = addNode;

    if(!this.front){
      this.front = addNode;
    }

  }

  dequeue(){

    if(this.isEmpty()){
      return 'Queue empty';
    }

    let removeNode = this.front;
    this.front = removeNode.next;

    if(this.back === removeNode){
      this.back = removeNode.next;
    }
  }

  peek(){

    if(this.isEmpty()){
      return 'Queue empty';
    }
    this.front.value;
    return this.front.value;
  }

  isEmpty(){
    let front = this.front;
    if(!front){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Queue;
