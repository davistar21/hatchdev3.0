class DLLNode <T>{
  value: T;
  next: DLLNode <T> | null;
  prev: DLLNode <T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLL <T> {
  head: DLLNode <T>;
  tail: DLLNode <T>;
  private length: number;

  constructor(value: T) {
    this.head = new DLLNode<T>(value) 
    this.tail = this.head;
    this.length = 1;
  }
  append(value: T): void {
    //create a new node
    const newNode = new DLLNode<T>(value);
    //let the tail point to the new node
    this.tail && (this.tail.next = newNode);
    //set the new node's prev to the current tail
    newNode.prev = this.tail;
    //set the tail to the new node
    this.tail = newNode
    //increase the length of the list
    this.length++;
  }
  prepend (value: T) : void {
    //create a new node
    const newNode = new DLLNode <T> (value);
    //let the newNode point to the current head
    newNode.next = this.head;
    //let the current head point to the newNode
    this.head.prev = newNode;
    // set the head to the new node
    this.head = newNode;
    //increase the length of the list
    this.length++
  }
  traverseToIndex(index: number): DLLNode<T> {
    let counter = 0;
    let currentNode = this.head as DLLNode<T>

    if (index <= 0) {
      return currentNode
    }
    if (index >= this.length) {
      return this.tail as DLLNode<T>
    }
    while (counter !== index) {
      currentNode = currentNode.next as DLLNode<T>
      counter++
    }
    return currentNode
  }
  insert(value: T, index:number) {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index <= 0) {
      this.prepend(value);
      return;
    }
    const newNode = new DLLNode<T>(value);
    let nodeBeforeIndex = this.traverseToIndex(index-1);
    let holdingNode = nodeBeforeIndex.next
    nodeBeforeIndex.next = newNode
    newNode.prev = nodeBeforeIndex
    newNode.next = holdingNode
    holdingNode && (holdingNode.prev = newNode)
    this.length++
  }
  remove (index: number) {
    if (index < 0 || index >= this.length) return;

    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    const nodeToDelete = nodeBeforeIndex.next;
    const holdingNode = nodeToDelete?.next
    nodeBeforeIndex.next = holdingNode as DLLNode<T>
    holdingNode && (holdingNode.prev = nodeBeforeIndex)
    this.length--
  }
}