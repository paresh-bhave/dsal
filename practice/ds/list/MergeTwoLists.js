/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode();
  head = newList;

  while(l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }
    head = head.next;
  }
  head.next = l1 || l2;
  return newList.next;
};


// Test

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(5);
l1.next.next.next = new ListNode(7);


const l2 = new ListNode(3);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);
l2.next.next.next = new ListNode(8);


let merged = mergeTwoLists(l1, l2);

while(merged) {
  console.log(merged.val);
  merged = merged.next;
}