// 证明 <= 2000 的偶数，可以分解为两个素数的和

function main() {
    for (let i = 4; i <= 2000; i += 2) {
        let j = 2;
        let mid = i / 2; // 只需要检测一半，另一半重复
        for (; j <= mid; ++j) {
            if (prime(j) && prime(i - j)) {
                break;
            }
        }
        if (j > mid) {
            console.log('error', i);
        }
    }
    console.log('success');
}

const primeCahce = {}; // 有大量重复的结果，进行结果的缓存可以大量提高性能
function prime(n) {
    if (primeCahce[n] != null) {
        return primeCahce[n];
    }
    if (n <= 1) {
        primeCahce[n] = 0;
        return 0;
    }
    if (n === 2) {
        primeCahce[n] = 1;
        return 1;
    }
    const sqrtN = Number.parseInt(Math.sqrt(n)); // 进行平方根运算非常消耗性能，对结果进行缓存
    for (let i = 2; i <= sqrtN; ++i) {
        if (n % i === 0) {
            primeCahce[n] = 0;
            return 0;
        }
    }
    primeCahce[n] = 1;
    return 1;
}

main();