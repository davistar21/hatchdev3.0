/**
 * A graph is a bunch of nodes connected by vertices
 */

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
  return arr;
}