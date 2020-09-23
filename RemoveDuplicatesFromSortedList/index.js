// Leet Code Problem 83 

// duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

// let input1 = new LinkedListNode(1)
// let input2 = new LinkedListNode(1)
// let input3 = new LinkedListNode(2)

// input1.next = input2
// input2.next = input3
// let head = input1

// var deleteDuplicates = function(head) {
//   if (!head) {
//       return head
//   }
//   let curr = head
//   while (curr.next) {
//     debugger
//       if (curr.val === curr.next.val) {
//           curr.next = curr.next.next
//       } else {
//           curr = curr.next
//       }
//   }
//   return head
// };

// console.log(deleteDuplicates(head))