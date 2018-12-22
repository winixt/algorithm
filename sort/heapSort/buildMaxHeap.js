// 将数组构建成最大堆
const maxHeapify = require('./maxHeapify');

function buildMaxHeap(arr) {
    let start = Math.ceil(arr.length / 2) - 1;
    for (let i = start; i >=0; --i) {
        maxHeapify(arr, i);
    }
}

module.exports = buildMaxHeap;
