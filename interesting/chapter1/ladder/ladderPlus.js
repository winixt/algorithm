// 爱因斯坦的阶梯之阶梯增
// O(8)

function ladderPlus() {
    let n = 21;
    while (!(
        n % 2 === 1 &&
        n % 3 === 2 &&
        n % 4 === 3 &&
        n % 5 === 4 &&
        n % 6 === 5 &&
        n % 7 === 0)) {
            n += 14;
        }
    
    return n;
}

console.log(ladderPlus())