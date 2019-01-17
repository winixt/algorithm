// 最长子序列问题

function longestSubsequence() {
    const cache = [];
    for (let i = 0; i <= s1.length; ++i) {
        if (i === 0) {
            cache.push(new Array(s2.length + 1).fill(0));
        } else {
            const arr = new Array(s2.length + 1);
            arr[0] = 0;
            cache.push(arr);
        }
    }
    for (let i = 1; i <= s1.length; ++i) {
        for (let j = 1; j <= s2.length; ++j) {
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                cache[i][j] = cache[i - 1][j - 1] + 1;
            } else if (cache[i - 1][j] > cache[i][j - 1]) {
                cache[i][j] = cache[i - 1][j];
            } else {
                cache[i][j] = cache[i][j - 1];
            }
        }
    }
    print(cache, s1, s2);
}

function print(cache, s1, s2) {
    let i = s1.length;
    let j = s2.length;
    console.log(`最长公共子序列长度：${cache[i][j]}`)
    const str = [];
    while (i !== 0 && j !== 0) {
        if (cache[i][j] > cache[i - 1][j] && cache[i][j] > cache[i][j - 1]) {
            str.unshift(s1[i - 1]);
            --i;
            --j;
        } else if (cache[i - 1][j] > cache[i][j - 1]) {
            --i;
        } else {
            --j;
        }
    }
    console.log(str.join(''));
}

const s1 = 'ABCADAB';
const s2 = 'BACDBA';

function main(s1, s2) {
    longestSubsequence(s1, s2);
}

main(s1, s2);

