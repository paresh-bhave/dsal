import LinkedQueue from "./LinkedQueue";
import Queue from "./Queue";

function main() {
  const queue = new Queue<number>();

  queue.add(10);
  queue.add(20);
  queue.add(30);
  queue.add(40);
  queue.add(50);
  queue.display();

  console.log(queue.remove());
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