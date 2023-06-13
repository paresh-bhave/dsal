/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

var MyQueue = function() {
  this.s1 = [];
  this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.s2.length) return this.s2.pop();
  while (this.s1.length) this.s2.push(this.s1.pop());
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.s2.length) return this.s2[this.s2.length-1];
  while (this.s1.length) this.s2.push(this.s1.pop());
  return this.s2[this.s2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.s1.length && !this.s2.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_1 = obj.peek();
var param_3 = obj.pop();
var param_2 = obj.peek();
var param_4 = obj.pop();
var param_5 = obj.empty();

console.log(param_1, param_2, param_3, param_4, param_5);