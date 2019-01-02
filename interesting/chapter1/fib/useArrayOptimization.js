// 使用数组优化 斐波那契数列

function arrayOptimization(n) {
    if (n < 1) {
        return -1;
    }
    const tmpArr = (new Array(n + 1)).fill(1);
    for (let i = 3; i <= n; ++i) {
        tmpArr[i] = tmpArr[i - 1] + tmpArr[i - 2];
    }
    return tmpArr[n];
}

module.exports = arrayOptimization;