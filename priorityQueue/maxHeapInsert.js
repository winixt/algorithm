// 在集合 S 中插入一个元素
const heapIncreaseKey = require('./heapIncreaseKey');

function maxHeapInsert(arr, key) {
    arr.push(Number.NEGATIVE_INFINITY);
    heapIncreaseKey(arr, arr.length - 1, key);
}