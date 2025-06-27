//A queue is a linear data structure that follows the First In First Out (FIFO) principle, where elements are added to the end and removed from the front. Below is a simple implementation of a queue in TypeScript using both an array and a linked list.

class Queue <T> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    return this.items[0];
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  size(): number {
    return this.items.length;
  }
}
const queue = new Queue<number>();
queue.enqueue(10);
class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class QueueLL <T> {
  private head: QueueNode<T> | null = null;
  private tail: QueueNode<T> | null = null;
  private length: number = 0;

  enqueue(value: T): void {
    const newNode = new QueueNode<T>(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    this.length++;
  }
  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return value;
  }
  peek(): T | undefined {
    return this.head ? this.head.value : undefined;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  size(): number {
    return this.length;
  }
}