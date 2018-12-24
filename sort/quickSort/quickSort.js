// 快排

const partition = require('./partition');

function quickSort(arr, p, r) {
    if (p < r) {
        const q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

module.exports = quickSort;
