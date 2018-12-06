/**
 * 递归法
 * 查找一个数组中的最大子数组（数组中有负数才有意义，没有负数，整个数组加起来最大）
 */

// 查找跨越中点的最大子数组
function findMaxCrossingSubArray(arr, low, mid, high) {
    let sum = 0;
    let leftSum = Number.NEGATIVE_INFINITY; // 负无穷大
    let maxLeft = 0;
    for(let i = mid; i >= low; --i) {
        sum += arr[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    sum = 0;
    let rightSum = Number.NEGATIVE_INFINITY;
    let maxRight = 0;
    for(let i = mid + 1; i <= high; ++i) {
        sum += arr[i];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
    }
    return [maxLeft, maxRight, leftSum + rightSum];
}

// 最大子数组问题
function findMaxSubArray(arr, low, high) {
    if (low === high) {
        return [low, high, arr[low]];
    } else {
        let mid = Math.floor((low + high) / 2);
        const [leftLow, leftHigh, leftSum] = findMaxSubArray(arr, low, mid);
        const [rightLow, rightHigh, rightSum] = findMaxSubArray(arr, mid + 1, high);
        const [crossLow, crossHigh, crossSum] = findMaxCrossingSubArray(arr, low, mid, high);
        if (leftSum >= rightSum && leftSum >= crossSum) {
            return [leftLow, leftHigh, leftSum];
        } else if (rightSum >= leftSum && rightSum >= crossSum) {
            return [rightLow, rightHigh, rightSum];
        }
        return [crossLow, crossHigh, crossSum];
    }
}

module.exports = findMaxSubArray;