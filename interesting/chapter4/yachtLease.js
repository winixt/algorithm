/**
 * 游艇租赁问题
 * m[i][j] = min{m[i, k] + m[k, j], m[i, j]}
 * 自低向上计算最优值，先求两点间的距离，在求三点间的距离，以此类推
 */

let str = '1';

function print(s, i, j) {
    if (s[i][j] === 0) {
        str += ' —— ' + (j + 1);
        return;
    }
    print(s, i, s[i][j]); 
    print(s, s[i][j], j);
}

function yachtLease(data, s) {
    const pointCount = data.length;
    for (let j = 2; j < pointCount; ++j) {
        for (let i = 0; i < pointCount - j; ++i) {
            for (let k = i + 1; k < i + j; ++k) {
                if (data[i][k] + data[k][i + j] < data[i][i + j]) {
                    data[i][i + j] = data[i][k] + data[k][i + j] ;
                    s[i][i + j] = k;
                }         
            }
        }
    }

    print(s, 0, 5);
    console.log('话费最少租金为: ' + data[0][5])
    console.log(str);

}


function main(data) {
    const n = data.length;
    const s = Array.from(new Array(n), () => new Array(n).fill(0));
    yachtLease(data, s);
}

const data = [
    [0, 2, 6, 9, 15, 20],
    [0, 0, 3, 5, 11, 18],
    [0, 0, 0, 3, 6, 12],
    [0, 0, 0, 0, 5, 8],
    [0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0],
];
main(data);