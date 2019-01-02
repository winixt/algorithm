// 爱因斯坦的阶梯之循环
// O(119)

function cycle() {
    let n = 1;
    while(!(n % 2 === 1
        && n % 3 === 2
        && n % 4 === 3
        && n % 5 === 4
        && n % 6 === 5
        && n % 7 === 0)) {
            n++;
    }
    return n;
}

console.log(cycle());