const merge = require('./merge');
/**
 * 归并排序
 */
function mergeSort(arr, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }
}

module.exports = mergeSort;