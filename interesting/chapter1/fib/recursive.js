// 递归求解 斐波那契数列
// 复杂度： 指数级别

function recursive(n) {
    if (n < 1) {
        return -1;
    }
    if (n === 1 || n ===2) {
        return 1;
    }
    return recursive(n-1) + recursive(n - 2);
}

module.exports = recursive;
