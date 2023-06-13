import LinkedStack from './LinkedStack';
import Stack from './Stack';

function main() {
  const stack = new Stack<number>(10);
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  stack.display();
  console.log(stack.peek());

  stack.pop();
  stack.pop();
  stack.display();


  const lstack = new LinkedStack<number>();
  lstack.push(10);
  lstack.push(20);
  lstack.push(30);
  lstack.push(40);
  lstack.push(50);
  lstack.display();
  console.log(lstack.peek());

  lstack.pop();
  lstack.pop();
  lstack.display();
}

main();