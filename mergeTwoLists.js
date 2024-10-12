/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let node = new ListNode(0);
  let target = node;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      target.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      target.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }
    target = target.next;
  }

  target.next = list1 !== null ? list1 : list2;

  return node.next;
};

// Tạo list1 = [1, 2, 4]
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// Tạo list2 = [1, 3, 4]
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
