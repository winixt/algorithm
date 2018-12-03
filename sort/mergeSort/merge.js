/**
 * 合并排好序的两个子数组
 */
function merge(arr, p, q, r) {
    console.log(arr, p, q, r);
    const n1 = q - p + 1;
    const n2 = r - q;
    const leftArr = arr.slice(p, q + 1);
    const rightArr = arr.slice(q+1, r + 1);
    leftArr[n1] = Infinity;
    rightArr[n2] = Infinity;
    let i = 0;
    let j = 0;
    for(let k = p; k <=r; ++k) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i++];
        } else {
            arr[k] = rightArr[j++];
        }
    }
    return arr;
}

module.exports = merge;
