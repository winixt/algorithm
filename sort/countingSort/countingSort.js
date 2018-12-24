// 计数排序
// 注意：这里数组长度受到整型数字精确度的限制

function countingSort(A, B, k) {
    const countingArr = (new Array(k)).fill(0);
    for (let i = 0; i < A.length; ++i) {
        countingArr[A[i]] ++;
    }
    for (let i = 1; i < k; ++i) {
        countingArr[i] += countingArr[i - 1];
    }
    for (let i = A.length - 1; i >= 0; --i) {
        B[countingArr[A[i]] - 1] = A[i]; // countingArr[i] 表示第 countingArr[i] 位数据
        --countingArr[A[i]];
    }
}

module.exports = countingSort;
