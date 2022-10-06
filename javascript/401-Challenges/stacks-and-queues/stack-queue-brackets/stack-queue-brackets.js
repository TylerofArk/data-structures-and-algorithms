'use strict';

function balanceBrackets() {
  let stack = new Stack();

  for (let i = 0; i <= str.length(); i++) {
    if (current == '(' || '[' || '{') {
      stack.push(current);
    } else if (current == ')' || ']' || '}') {
      stack.pop();
    } else if (current == ')' || ']' || '}') {
      stack.pop();
    } else if (current == ')' || ']' || '}') {
      stack.pop();
    }

  }
  return (stack.length() === 0);
}
