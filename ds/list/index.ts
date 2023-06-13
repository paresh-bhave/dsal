import ListNode from "./ListNode";
import LinkedList from "./LinkedList";
import DLinkedList from "./DLinkedList";

function main() {
  const list = new DLinkedList<number>();

  list.insert(10);
  list.insert(20);
  list.insert(30);
  list.insert(40);
  list.display();
  
  list.prepend(5);
  list.display();

  list.append(50);
  list.display();

  console.log(list.first());
  console.log(list.get(3));
  console.log(list.last());
  console.log(list.find(20));

  list.insertAt(2, 25);
  list.display();

  list.insertAt(0, 0);
  list.display();

  list.insertAt(7, 60);
  list.display();

  list.remove(50)
  list.display();

  list.removeLast();
  list.removeLast();
  list.removeFirst();
  list.display();
}

main();