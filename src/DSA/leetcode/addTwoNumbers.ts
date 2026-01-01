class ListNoded {
  val: number;
  next: ListNoded | null;
  constructor(val?: number, next?: ListNoded | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(
  l1: ListNoded | null,
  l2: ListNoded | null
): ListNoded | null {
  let head = new ListNoded(0);
  let current = head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    current.next = new ListNoded(digit);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
}
