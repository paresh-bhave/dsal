
export default class ListNode<T> {
  element: T;
  next: ListNode<T> | null;
  prev?: ListNode<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}