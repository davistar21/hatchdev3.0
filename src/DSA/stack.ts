//pop
//push
//peek
class Stack<T> {
  private items: T[] = [];

  // Push an item onto the stack
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return the top item
  pop(): T | undefined {
    return this.items.pop();
  }

  // Return the top item without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size(): number {
    return this.items.length;
  }

  // Clear the stack
  clear(): void {
    this.items = [];
  }

  // For debugging or inspection
  print(): void {
    console.log(this.items);
  }
}
3
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

stack.print(); // [10, 20]



class StackNode <T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class StackLL<T> {
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  push(value: T): void {
    const newNode = new StackNode<T>(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    const holdingNode = this.top;
    this.top = newNode;
    this.top.next = holdingNode;
    this.length++;
  }
  peek (): StackNode<T> | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.top?.value as StackNode<T>
  }
  pop () : StackNode<T> | null {
    if (this.isEmpty()) {
      return null;
    }
    const holdingNode = this.top;
    this.top = this.top?.next || null;
    this.length--;
    return holdingNode?.value as StackNode<T>
  }
}



//implement circular, implement stack and queue, list the applications of each



// depth first search, breadth first search