var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSortInPlace(arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    if (low < high) {
        var pi = partition(arr, low, high);
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
}
function partition(arr, low, high) {
    var _a, _b;
    var pivot = arr[high];
    var i = low - 1; //i=-1 for the first element;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            console.log("\nParameters ", "\nThe current array: ", arr, "\ni and j: ", i, j, "\nlow and high: ", low, high);
        }
    }
    _b = [arr[high], arr[i + 1]], arr[i + 1] = _b[0], arr[high] = _b[1];
    return i + 1;
}
console.log('Quick Sort In Place: ', (function () {
    var arr = __spreadArray([], modelArray, true);
    quickSortInPlace(arr);
    return arr;
})());
