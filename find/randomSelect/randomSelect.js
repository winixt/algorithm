/**
 * 找出数组中第 k 大的数字
 */
const util = require('../../utils');

function partition(arr, p, r) {
    let flag = p - 1;
    const par = arr[r];
    for(let j = p; j < r; ++j) {
        if (arr[j] <= par) {
            flag++;
            const tmp = arr[flag];
            arr[flag] = arr[j];
            arr[j] = tmp;
        }
    }
    arr[r] = arr[flag + 1];
    arr[flag + 1] = par;
    return flag + 1;
}

function randomizedPartition(arr, p, r) {
    const randomQ = util.random(p, r);
    const tmp = arr[r];
    arr[r] = arr[randomQ];
    arr[randomQ] = tmp;
    return partition(arr, p, r);
}

function randomSelect(arr, p, r, k) {
    if (p === r) {
        return arr[p];
    }
    const q = randomizedPartition(arr, p, r);
    const mark = q - p + 1;
    if (mark === k) {
        return arr[q];
    } else if (mark > k) {
        return randomSelect(arr, p, q - 1, k);
    } else {
        return randomSelect(arr, q + 1, r, k - mark);
    }
}

module.exports = randomSelect;
