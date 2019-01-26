/**
 * 矩阵连乘
 * 根据矩阵乘法特性，可以使用一维数据存储矩阵的行和列 p[i - 1] | p[i] 表示行列
 * 递归式
 * m[i][j] = min{m[i][k] + m[k+1][j] + p[i - 1] * p[k] * [j]}
 */

let str = '';
function print(s, i, j) {
    console.log(i, j);
    if (i === j) {
        str += `A[${i}]`;
        return;
    }
    str = '(' + str;
    print(s, i, s[i][j]);
    print(s, s[i][j] + 1, j);
    str += ')';
}

function matrixMultiply(p) {
    const m = Array.from(new Array(p.length), () => new Array(p.length).fill(0));
    const s = Array.from(new Array(p.length), () => new Array(p.length).fill(0));
    
    for (let step = 1; step < p.length; ++step) {
        for (let i = 1; i < p.length - step; ++i) {
            let j = i + step;
            let min = Infinity;
            let minKey = 0;
            for (let k = i; k < j; ++k) {
                const tmp = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (tmp < min) {
                    minKey = k;
                    min = tmp;
                }
            }
            s[i][j] = minKey
            m[i][j] = min;
        }
    }
    console.log(`矩阵乘法最小次数为: ${m[1][p.length - 1]}`);
    print(s, 1, p.length - 1);
    console.log(str);
}

const p = [3, 5, 10, 8, 2, 4];
function main(p) {
    matrixMultiply(p);   
}

main(p);
