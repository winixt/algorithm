// 去掉并返回 S 集合中最大的元素
const maxHeapify = require('../sort/heapSort/maxHeapify');

function heapExtractMax(arr) {
    const max = arr[0];
    arr[0] = arr.pop();
    maxHeapify(arr, 0);
    return max;
}

module.exports = heapExtractMax;
