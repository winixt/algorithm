// 爱因斯坦的阶梯
// 求出 2、3、5、6 的最小公倍数
// 最小公倍数求法：欧几里得法，先求最大公约数，在求最小公倍数

// 求解最大公约数
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}


function ladder() {
    const arr = [2, 3, 5, 6];
    for (let i = 0; i < arr.length - 1; ++i) {
        let g = gcd(arr[i + 1], arr[i]);
        arr[i + 1] = (arr[i + 1] * arr[i]) / g;
    }
    let n = arr[3] - 1;
    while(n % 7 !== 0) {
        n += arr[3];
    }
    return n;
}

console.log(ladder());