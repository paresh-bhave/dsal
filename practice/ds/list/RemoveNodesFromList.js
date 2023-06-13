/**
 * https://leetcode.com/problems/remove-nodes-from-linked-list/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
  const stack = [];
  while (head) {
    while (stack.length && head.val > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(head.val);
    head = head.next;
  }
  while (stack.length) {
    head = new ListNode(stack.pop(), head);
  }
  return head;
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

const l1 = new ListNode(5);
l1.next = new ListNode(2);
l1.next.next = new ListNode(13);
l1.next.next.next = new ListNode(3);
l1.next.next.next.next = new ListNode(8);

let list = removeNodes(l1);

// while(list) {
//   console.log(list.val);
//   list = list.next;
// };