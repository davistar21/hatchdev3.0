/* 
  A hash map stores keys and values
  To store the key, you use a hash function to generate a number. Then take the number(hash of k) modulo the length of the internal array
  index = hash(k) % internalArray.length, in the internal array.
  Such that internalArray[index] = value
*/



class HashMap {
  private map: { [key: string]: any } = {};


  set(key: string, value: any) {
    this.map[key] = value;
  }

  get(key: string) {
    return this.map[key];
  }

  has(key: string) {
    return key in this.map;
  }

  delete(key: string) {
    delete this.map[key];
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }
}

const hhs = new HashMap()

hhs.set('name', 'John Doe');

console.log(hhs)
console.log(hhs.get('name')); // John Doe 



/* Assignment
  Implement a hashmap without collisions.
*/

class MyHashMap<V> {
  private internalArray: Array<[string, V, number]| undefined>;
  private capacity: number;

  constructor(capacity: number = 53) {
    this.capacity = capacity;
    this.internalArray = new Array(capacity);
  }
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i);
      hash = (hash * 31 + charCode) >>> 0; 
    }
    return hash % this.capacity;
  }

  set(key: string, value: V): void {
    const index = this.hash(key);
    this.internalArray[index] = [key, value, index];
  }

  get(key: string): V | undefined {
    const index = this.hash(key);
    const entry = this.internalArray[index];
    return entry && entry[0] === key ? entry[1] : undefined;
  }

  has(key: string): boolean {
    const index = this.hash(key);
    const entry = this.internalArray[index];
    return entry !== undefined && entry[0] === key;
  }

  delete(key: string) {
    const index = this.hash(key);
    const entry = this.internalArray[index];
    entry && entry[0] === key ? this.internalArray[index] = undefined : undefined
  }
}


const hashmap1 = new MyHashMap<string>;
hashmap1.set('name', 'alice')
hashmap1.set('phone', '2-444-66666-8888888')
hashmap1.set('email', 'alice@email.com')

console.log(hashmap1);

hashmap1.delete('email')
console.log(hashmap1);
console.log(hashmap1.get('phone'))

//Hashmap handling collisions

class ListNode<K, V> {
  key: K;
  val: V;
  next: ListNode<K, V> | null = null

  constructor(key:K, val:V){
    this.key = key;
    this.val = val
  }
}

class MainHashMap<K, V>{
  private buckets: Array<ListNode<K, V> | null>;
  private size: number;

  constructor(size:number = 53) {
    this.size = size;
    this.buckets = new Array(this.size).fill(null)
  }
  private hash (key: K): number {
    const strk = String(key);
    let hash = 0;
    for (let i = 0; i < strk.length; i++) {
      hash = (hash + strk.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  set (key: K, val: V): void {
    const index = this.hash(key);
    let head = this.buckets[index];

    let current = head;

    while (current) {
      if (current.key == key){
        current.val = val;
        return
      }
      current = current.next;
    }
    const newNode = new ListNode(key, val);
    this.buckets[index] = newNode;
    newNode.next = head;
  }
  get(key: K): V | undefined {
    const index = this.hash(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        return current.val;
      }
      current = current.next;
    }
    return undefined;
  }
  remove(key: K): void {
    const index = this.hash(key);
    let current = this.buckets[index];
    if (!current) return;
    while (current) {
      if (current.key === key) {

      }
    }
  }
}