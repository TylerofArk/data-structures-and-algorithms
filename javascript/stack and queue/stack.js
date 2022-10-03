'use strict';

const Node = require('./node.js');

class Stack{
  constructor(){
    this.top = null;
  }

  push(value) {
    let oldTop = this.top;
    let addNode = new Node(value);
    addNode.next = oldTop;
    this.top = addNode;
  }

  pop(){
    let temp = this.top;
    if(this.isEmpty()){
      return 'Stack empty';
    }
    this.top = temp.next;
    return temp.value;
  }

  peek(){
    let top = this.top;
    if(this.isEmpty()){
      return 'Stack empty';
    }
    return top.value;
  }

  isEmpty(){
    let top = this.top;
    if(!top){
      return true;
    }
    else{
      return false;
    }
  }

}

module.exports = Stack;
