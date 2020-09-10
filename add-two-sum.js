/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let num1 = "";
  let num2 = "";

  let ll = new ListNode();
  let head = ll;

  let sec = l1;
  let sec2 = l2;

  while (sec) {
    num1 += sec.val;
    sec = sec.next;
    if (sec === null) {
      break;
    }
  }

  while (sec2) {
    num2 += sec2.val;
    sec2 = sec2.next;
    if (sec2 === null) {
      break;
    }
  }
  sec = num1.split("").reverse().join("");
  sec2 = num2.split("").reverse().join("");
  let tot = BigInt(sec) + BigInt(sec2);
  tot += "";

  tot
    .split("")
    .reverse()
    .map((ele) => {
      console.log(ele);
      head.next = new ListNode();
      head = head.next;
      head.val = ele;
    });

  return ll.next;
};
