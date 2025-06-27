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

class SimpleHashMap<V> {
  private internalArray: Array<[string, V] | undefined>;
  private capacity: number;

  constructor(capacity: number = 53) {
    this.capacity = capacity;
    this.internalArray = new Array(capacity);
  }

  // Simple hash function for strings
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i);
      hash = (hash * 31 + charCode) >>> 0; // unsigned 32-bit int
    }
    return hash % this.capacity;
  }

  set(key: string, value: V): void {
    const index = this.hash(key);
    this.internalArray[index] = [key, value];
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

  delete(key: string): boolean {
    const index = this.hash(key);
    const entry = this.internalArray[index];
    if (entry && entry[0] === key) {
      this.internalArray[index] = undefined;
      return true;
    }
    return false;
  }
}
