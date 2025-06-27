/*
A hash map is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash map uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
It is usually organized as a key-value pair, where each key is unique and maps to a specific value. Hash maps are commonly used for fast data retrieval, as they allow for average-case constant time complexity for lookups, insertions, and deletions.

Linked lists are a data structure consisting of a sequence of elements, where each element points to the next one in the sequence. This allows for efficient insertion and deletion of elements, as well as dynamic memory allocation. Linked lists can be singly linked (where each element points to the next) or doubly linked (where each element points to both the next and previous elements).
The time complexity for accessing an element in a linked list is O(n) in the worst case, as it may require traversing the entire list to find the desired element. However, insertion and deletion operations can be performed in O(1) time if the position is known.
*/
class SinglyNode<T>{
  value: T;
  next: SinglyNode<T> | null;
  constructor(value: T) {
      this.value = value;
      this.next = null
  }
}

class SinglyLinkedList<T> {
  head: SinglyNode<T> | null = null
  length: number = 0;
  constructor(initialValue: T){
    const newNode = new SinglyNode<T>(initialValue);
    this.head = newNode;
    this.length++;
  }
  add(value: T): void {
    const newNode = new SinglyNode<T>(value);
    if (this.head == null) {
        this.head = newNode;
        return
    }
    let currentNode = this.head;
    while(currentNode.next) {
        currentNode = currentNode.next
    }
    this.length++
    currentNode.next = newNode
  }
}

const numberList = new SinglyLinkedList<number>(10);
numberList.add(20)
numberList.add(50)
numberList.add(500)

console.log(numberList)

const stringList = new SinglyLinkedList<string>("Hello");
stringList.add("World");
console.log(stringList);

class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;

  append(value: T): void {
    const node = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value: T): void {
    const node = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  delete(value: T): void {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;

        return;
      }
      current = current.next;
    }
  }

  printForward(): void {
    let current = this.head;
    const result: T[] = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }

  printBackward(): void {
    let current = this.tail;
    const result: T[] = [];
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(" <-> "));
  }
}
class CircularNode<T> {
  value: T;
  next: CircularNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class CircularLinkedList<T> {
  head: CircularNode<T> | null = null;

  append(value: T): void {
    const node = new CircularNode(value);
    if (!this.head) {
      this.head = node;
      node.next = node;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next!;
      }
      current.next = node;
      node.next = this.head;
    }
  }

  delete(value: T): void {
    if (!this.head) return;

    let current = this.head;
    let prev: CircularNode<T> | null = null;

    do {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
        } else {
          // Deleting the head node
          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next!;
          }
          this.head = current.next;
          tail.next = this.head;
        }
        return;
      }
      prev = current;
      current = current.next!;
    } while (current !== this.head);
  }

  print(): void {
    if (!this.head) return;

    const result: T[] = [];
    let current = this.head;
    do {
      result.push(current.value);
      current = current.next!;
    } while (current !== this.head);

    console.log(result.join(" -> ") + " -> (back to head)");
  }
}
const dll = new DoublyLinkedList<number>();
dll.append(10);
dll.append(20);
dll.prepend(5);
dll.printForward();  // 5 <-> 10 <-> 20
dll.printBackward(); // 20 <-> 10 <-> 5
dll.delete(10);
dll.printForward();  // 5 <-> 20

const cll = new CircularLinkedList<string>();
cll.append("A");
cll.append("B");
cll.append("C");
cll.print();         // A -> B -> C -> (back to head)
cll.delete("B");
cll.print();         // A -> C -> (back to head)




console.log(cll, dll)

const arr0: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

arr0.forEach(element => {

})

// for (let i = 0; i < arr0.length; i++) {
//   for (let j = (Math.floor(Math.random())*arr0.length); j > 0; j --) {
//     console.log(i,j)
//   }
// }
for (let i = arr0.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr0[i], arr0[j]] = [arr0[j], arr0[i]];
  console.log(i)
}
console.log(arr0)


