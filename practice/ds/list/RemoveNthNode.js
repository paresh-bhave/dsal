/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let temp = new ListNode(0);
  temp.next = head;
  
  let fast = temp, slow = temp;

  for(let i = 0; i <= n; i++) {
    if (fast === null) return null;
    fast = fast.next;
  }

  while(fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return temp.next;
};


/**
 * Test
 * @param {*} val 
 * @param {*} next 
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

let list = removeNthFromEnd(l1, 2);

while(list) {
  console.log(list.val);
  list = list.next;
};