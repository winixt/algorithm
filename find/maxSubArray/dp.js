/**
 * 动态规划求解 最大子数组问题
 */

function dp(arr) {
    const sum = [];
    sum[0] = arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        sum[i+1] = Math.max(sum[i] + arr[i], arr[i]);
    }
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let num of sum) {
        if (num > maxSum) {
            maxSum = num;
        }
    }
    return maxSum;
}

module.exports = dp;