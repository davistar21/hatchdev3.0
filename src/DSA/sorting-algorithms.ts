/**
 * Sorting algorithms are used to sort data in a specific order, such as ascending or descending.
 * * Common sorting algorithms include:
 * * Bubble Sort (n square): it starts by moving through the list, comparing adjacent elements and swapping them if they are in the wrong order. This process is repeated until the list is sorted.
 * * Selection Sort (n square)
 * * Insertion Sort (n square)
 * * Merge Sort (n log n)
 * * Quick Sort (n log n)
 * * Heap Sort (n log n)
 * * Counting Sort (n + k)
 * * Radix Sort (nk)
 * * Bucket Sort (n + k)
 * * Each algorithm has its own time and space complexity, making them suitable for different scenarios.
 */
const modelArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(modelArray)
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        swapped = true
      } 
    }
    if (!swapped) break 
  }
  return arr
}
console.log(bubbleSort([...modelArray]))

function range(arr: number[]): number{
  let maxIdx = 1;
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) {
      maxIdx = i;
      continue
    }
    if (arr[i] < arr[minIdx]) minIdx = i
  }
  return arr[maxIdx] - arr[minIdx]
}

console.log('The range of ' + modelArray.map(e=>e).join(', ') + ' is ' + range(modelArray))

function selectionSort(arr: number[]): number[]{
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
  return arr
}

console.log(selectionSort([...modelArray]))

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) { //[6, 7, 8, 9, 10]
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log('Insertion Sort: ', insertionSort([6, 4, 5, 3, 2, 1]));
console.log('Insertion Sort: ', insertionSort([...modelArray]));


function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);
  return result;
}
console.log('Merge Sort: ', mergeSort([...modelArray]));


function binarySearch(arr: number[], target: number): number{
  let low = 0;
  let high = arr.length - 1;
  do {
    let mid = Math.floor(low + high/2);
    if (target == arr[mid]) return mid;
    else if (target < arr[mid]) high = mid - 1;
    else if (target > arr[mid]) low = mid + 1;
  } while(high >= low)
  
  return -1
}

console.log(binarySearch([1,2,3,4,5], 2))

function binarySearchRecursive(
  arr: number[], 
  target: number, 
  low:number=0, 
  high:number=arr.length-1
){
  if (low > high) return -1;
  const mid = Math.floor((high+low)/2);
  if (arr[mid]==target) return mid;
  else if (target > arr[mid]) return binarySearchRecursive(arr, target, mid+1, high);
  else if (target < arr[mid]) return binarySearchRecursive(arr, target, low, mid-1);
}

console.log(binarySearchRecursive([1,2,3,4,5], 2))

// function mergesort(
//   arr: number[],
//   left: number[] = [],
//   right: number[] = [],
//   low:number = 0,
//   high:number = arr.length - 1
// ): number[] {
//   const mid = low + high/2;
//   left = mergesort(arr.slice(0, mid));
//   right = mergesort(arr.slice(mid, high))
// }


function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  const middle = arr.filter(x => x === pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log('Quick Sort: ', quickSort([...modelArray]));

function quickSortInPlace(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSortInPlace(arr, low, pivot - 1);
    quickSortInPlace(arr, pivot + 1, high);  
   }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1; //i=-1 for the first element;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log(
        "\nParameters ",
        "\nThe current array: ", arr, 
        "\ni and j: ", i, j, 
      )
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

console.log('Quick Sort In Place: ', (() => {
  const arr = [...modelArray];
  quickSortInPlace(arr);
  return arr;
})());