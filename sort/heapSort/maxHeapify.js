// 维持一个最大堆

function maxHeapify(arr, root, heapSize) {
    heapSize = heapSize || arr.length;
    const left = root * 2 + 1;
    const right = left + 1;
    let latest = root;
    if (left < heapSize && arr[left] > arr[root]) {
        latest = left;
    }
    if (right < heapSize && arr[right] > arr[latest]) {
        latest = right;
    }
    if (latest !== root) {
        const rootNum = arr[root];
        arr[root] = arr[latest];
        arr[latest] = rootNum;
        maxHeapify(arr, latest, heapSize);
    }
}

module.exports = maxHeapify;
