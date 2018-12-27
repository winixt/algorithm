// 查找一个数组中的最大值和最小值，使比较次数上限为 3 * Math.floor(n / 2)

function maxAndMin(A) {
    let max;
    let min;
    let startIndex;
    if (A.length % 2 !== 0) {
        max = min = A[0];
        startIndex = 1;
    } else {
        if (A[0] >= A[1]) {
            max = A[0];
            min = A[1];
        } else {
            max = A[1];
            min = A[0];
        }
        startIndex = 2;
    }
    for (let i = startIndex; i < A.length;) {
        let maxIndex = i;
        let minIndex = i + 1;
        if (A[i] < A[i + 1]) {
            maxIndex = i + 1;
            minIndex = i;
        }
        if (A[maxIndex] > max) {
            max = A[maxIndex];
        }
        if (A[minIndex] < min) {
            min = A[minIndex];
        }
        i += 2;
    }
    return [max, min];
}

module.exports = maxAndMin;