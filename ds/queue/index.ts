import LinkedQueue from "./LinkedQueue";
import Queue from "./Queue";

function main() {
  const queue = new Queue<number>();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  queue.display();

  console.log(queue.dequeue());
  queue.display();

  console.log(queue.front());

  const lqueue = new LinkedQueue<number>();

  lqueue.enqueue(10);
  lqueue.enqueue(20);
  lqueue.enqueue(30);
  lqueue.enqueue(40);
  lqueue.enqueue(50);
  lqueue.display();

  console.log(lqueue.dequeue());
  lqueue.display();

  console.log(lqueue.front());
}

main();