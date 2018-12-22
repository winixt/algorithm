// 堆排序
const maxHeapify = require('./maxHeapify');
const buidMaxHeap = require('./buildMaxHeap');

function heapSort(arr) {
    buidMaxHeap(arr);
    for(let i = arr.length - 1; i > 0; --i) {
        let max = arr[0];
        arr[0] = arr[i];
        arr[i] = max;
        maxHeapify(arr, 0, i);
    }
}

module.exports = heapSort;
