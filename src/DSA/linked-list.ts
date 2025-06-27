/* Operations on Linked List 
  Append
  Prepend
  Insert
  Delete
  Traverse
  Reverse
*/

class SLLNode <T>{
  value: T
  next: SLLNode <T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SLL<T> {
  head: SLLNode<T>;
  tail: SLLNode<T> | null;
  private length: number

  constructor(value: T) {
    this.head = new SLLNode<T>(value);
    this.tail = this.head;
    this.length = 1;
  }

  //Append a new node to the end of the list
  append(value: T): void {
    //Create a new node
    const newNode = new SLLNode<T>(value);
    //let the tail point to the new node
    this.tail && (this.tail.next = newNode)
    //set the tail to the new node
    this.tail = newNode;
    //increase the length of the list
    this.length++
  }
  prepend(value: T): void {
    //create a new node
    const newNode = new SLLNode<T>(value);
    //assign newNode.next to the current head
    newNode.next = this.head
    //set the head to the new node
    this.head = newNode
    //increase the length of the list
    this.length++;
  }
  traverseToIndex(index: number) : SLLNode<T>{
    let counter = 0;
    let currentNode = this.head as SLLNode<T>;
    
    if (index <= 0) {
      return currentNode
    }
    if (index >= this.length) {
      return this.tail as SLLNode<T>;
    }

    while (counter !== index) {
      currentNode = currentNode.next as SLLNode<T>;
      counter++;
    }
    return currentNode;
  }

  insert(value: T, index: number): void {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index <= 0) {
      this.prepend(value);
      return;
    }
    //create a new node
    const newNode = new SLLNode<T>(value);
    //create a variable to store the node before the index;
    let leadingNode = this.traverseToIndex(index - 1);
    //create a variable to store the node at the index
    let holdingNode = leadingNode.next;
    //set the leading node's next to the new node
    leadingNode.next = newNode;
    //set the new node's next to the holding node
    newNode.next = holdingNode;
    //increase the length of the list
    this.length++;
  }
  remove (index: number) {
    //traverse to the node before the index
    const prevNode = this.traverseToIndex(index - 1);
    //save the node to delete
    const nodeToDelete = prevNode.next;
    //create a holding node that stores the node after nodeToDelete
    const holdingNode = nodeToDelete?.next;
    //then point the prevNode to the holdingNode;
    prevNode.next = holdingNode as SLLNode<T>
    //decrement the length by 1
    this.length--
  }
  reverse (){
    if (!this.head.next) {
      return this.head
    }
    //create a first variable
    let first = this.head
    this.tail = this.head

    let second = first.next

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp
    }
    this.head.next = null;
    this.head = first;
  }
}

const numberLists = new SLL<number>(10);
numberLists.append(20);
numberLists.append(30);
numberLists.append(300);
numberLists.prepend(5);
numberLists.insert(15, 2);
numberLists.insert(1590, 2);
console.log(numberLists)








