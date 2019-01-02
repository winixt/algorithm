// 加勒比海盗之最优装载问题
// 使用快排对输入进行排序

function random(min, max) {
    return min + Math.round((max - min) * Math.random());
}

function exchange(arr, from, to) {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

function randomPartition(arr, p, r) {
    const randomNum = random(p, r);
    exchange(arr, randomNum, r);
    const mid = arr[r];
    let mark = p - 1;
    for (let j = p; j < r; ++j) {
        if (arr[j] <= mid) {
            mark++;
            exchange(arr, mark, j);
        }
    }
    arr[r] = arr[mark + 1];
    arr[mark + 1] = mid;
    return mark + 1;
}

function quickSort(arr, p, r) {
    if (p < r) {
        const q = randomPartition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

const data = [4, 10, 7, 11, 3, 5, 14, 2];
const w = 30;

function caribbean(data, weight) {
    quickSort(data, 0, data.length - 1);
    let ans = data.length - 1;
    let tmp = 0;
    for (let i = 0; i < data.length; ++i) {
        tmp += data[i];
        if (tmp >= weight) {
            if (tmp === w) {
                ans = i + 1; // i 从 0 开始算起
            } else {
                ans = i;
            }
            break;
        }
    }
    return ans;
}

console.log(caribbean(data, w));