/**
* Link: https://leetcode.com/problems/reverse-linked-list
* 
* Given the head of a singly linked list, reverse the list, and return the reversed list.
* 
* Example 1:
* Input: head = [1,2,3,4,5]
* Output: [5,4,3,2,1]
* 
* Example 2:
* Input: head = [1,2]
* Output: [2,1]
* 
* Example 3:
* Input: head = []
* Output: []
* 
* Constraints:
* a. The number of nodes in the list is the range [0, 5000].
* b. -5000 <= Node.val <= 5000
*/

var reverseList = function(head) {
  let prev = null; 
  while(head){
    let temp = head.next; 
    head.next = prev; 
    prev = head; 
    head = temp; 
  }
  return prev; 
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

let reversed = reverseList(l1);

while(reversed) {
  console.log(reversed.val);
  reversed = reversed.next;
};