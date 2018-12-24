// 随机快排
const partition = require('./partition');
const util = require('../../utils');

function randomPartition(arr, p, r) {
    const radomNum = util.random(p, r);
    const tmp = arr[radomNum];
    arr[radomNum] = arr[r];
    arr[r] = tmp;
    return partition(arr, p, r);
}

function randomQuickSort(arr, p, r) {
    if (p < r) {
        const q = randomPartition(arr, p, r);
        randomQuickSort(arr, p, q - 1);
        randomQuickSort(arr, q + 1, r);
    }
}

module.exports = randomQuickSort;