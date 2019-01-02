// 使用缓存优化

function cacheOptimization(n) {
    if (n < 1) {
        return -1;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let s1 = 1;
    let s2 = 1;
    for(let i = 3; i <= n; ++i) {
        s1 = s1 + s2;
        s2 = s1 - s2;
    }
    return s1;
}

module.exports = cacheOptimization;
