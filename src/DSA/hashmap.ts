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


function targetSum(arr: number[], target: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i], arr[j]);
      }
    }
  }
  return result
}

console.log(targetSum([1, 2, 3, 4, 5], 7))


/**
 * Missing Number 268
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * Group Anagrams 49
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * TwoSum 1
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice. 
 * You can return the answer in any order.
 * Isomorphic Strings 205
 * Given two strings s and t, determine if they are isomorphic.
 */


let testArray:number[] = [0, 1, 3, 4];
function generateMissingNumberArray(n:number):number[]{
  let arr:number[] = [0];
  for (let i = 0; i < n; i++) {
    arr.push(i+1)
  }

  arr.splice(Math.floor(Math.random()*n), 1)
  return arr
}
function returnMissingNumber(arr: number[]): number{
  let missingNumber:number = 0;
  arr.sort((a, b) => a-b)
  for (let i=0; i<arr.length;i++){
    if (arr[i]+1!==arr[i+1]) {
      missingNumber = arr[i]+1
      return missingNumber
    }
  }
  return 0
}
console.log(returnMissingNumber(testArray))
console.log('Generated Missing Number: ', returnMissingNumber(generateMissingNumberArray(7)))

function missingNumber(nums: number[]): number {
    const numSet = new Set<number>(nums);
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    return -1;
}
function missingNumberT(nums: number[]): number {
    const numMap: Record<number, boolean> = {};

    // Fill the map with existing numbers
    for (const num of nums) {
        numMap[num] = true;
    }

    const n = nums.length;

    // Check which number from 0 to n is missing
    for (let i = 0; i <= n; i++) {
        if (!(i in numMap)) {
            return i;
        }
    }

    // Should never reach here if constraints are guaranteed
    return -1;
}


let testStrings:string[] = ['eat', 'ate', 'foo', 'oof', 'tea', 'arc', 'car', 'bea', 'abe', 'aet', 'eta', 'ofo', 'june'];
function groupAnagrams(arr: string[]) :any[]|string[]|number[]|Map<string, string[]>{
  let map = new Map<string, string[]>();
  let finalArr:any[] = [];
  let keys = new Set()
  arr.forEach(str => {
    let key = 0
    for (const letter of str) {
      key += letter.charCodeAt(0)
    }
    keys.add(String(key))
    if (!map.has(String(key))) {
      map.set(String(key), [str])
    } else {
      (map.get(String(key)))?.push(str)
    }
  })
  keys.forEach(key => {
    finalArr.push(map.get(String(key)))
  })
  return finalArr
}
function groupAnagramsT(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        const key = count.join('#'); // Join counts to create a unique key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(str);
    }
    return Array.from(map.values());
}


console.log('a'.charCodeAt(0))
console.log(groupAnagrams(testStrings))

function isIsomoprhic(s:string, t:string): boolean|Map<any,any> { // app -> egg, food -> seep
  if (s.length !== t.length) return false;
  let s_map = new Map();
  let t_map = new Map()
  for (const index in [...s]) s_map.set(s[index], t[index])
  for (const index in [...t]) t_map.set(t[index], s[index])
  return s_map.size == t_map.size
}
console.log(isIsomoprhic('a', 'ab'))
console.log(isIsomoprhic('app', 'egg'))
console.log(isIsomoprhic('food', 'seep'))
console.log(isIsomoprhic('badc', 'baba'))
console.log(isIsomoprhic('baba', 'badc'))

function multiple(num:number):any|any[] {
  if (num < 0) return []
  
  if (num % 2 == 0) {
    return [2, ...multiple(num/2)]
  }
  if (num % 3 == 0) {
    return [3, ...multiple(num/3)]
  }
  if (num % 5 == 0) {
    return [5, ...multiple(num/5)]
  }
  if (num % 7 == 0) {
    return [7, ...multiple(num/7)]
  }
  return []
}
console.log(multiple(90))


function twoSum(nums:number[], target:number) :number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target-nums[i])) return [map.get(target-nums[i]), i]
    map.set(nums[i], i)
  }
  return [-1]
}
console.log(twoSum([6, 8, 9], 17))
console.log(generateMissingNumberArray(9))



