// 高级钟点秘书——会议安排
// 切入点: 1. 最早开始时间；2. 最短开会时间了；3. 最早结束时间

function random(min, max) {
    return min + Math.round((max - min) * Math.random());
}

function exchange(arr, from, to) {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

function judge(arr, i, j, check) {
    if (check) {
        return check(arr[i], arr[j]);
    }
    return arr[i] <= arr[j];
}

function randomPartition(arr, p, r, check) {
    exchange(arr, random(p, r), r);
    let mark = p - 1;
    for (let j = p; j < r; ++j) {
        if (judge(arr, j, r, check)) {
            ++mark;
            exchange(arr, mark, j);
        }
    }
    exchange(arr, mark + 1, r);
    return mark + 1;
}

function quickSort(arr, p, r, check) {
    if (p < r) {
        const q = randomPartition(arr, p, r, check);
        quickSort(arr, p, q - 1, check);
        quickSort(arr, q + 1, r, check);
    }
}

function secretary(data) {
    quickSort(data, 0, data.length - 1, (a, b) => {
        return a.end <= b.end;
    });
    let mark = -1;
    let sum = 0;
    for (let i = 0; i < data.length; ++i) {
        const item = data[i];
        if (item.beg >= mark) {
            mark = item.end;
            ++sum;
            console.log(`选择第 ${item.num} 个会议室`);
        }
    }
    console.log(`最多可以安排 ${sum} 个会议室`);
}

const data = [
    {beg: 3, end: 6, num: 1},
    {beg: 1, end: 4, num: 2},
    {beg: 5, end: 7, num: 3},
    {beg: 2, end: 5, num: 4},
    {beg: 5, end: 9, num: 5},
    {beg: 3, end: 8, num: 6},
    {beg: 8, end: 11, num: 7},
    {beg: 6, end: 10, num: 8},
    {beg: 8, end: 12, num: 9},
    {beg: 12, end: 14, num: 10}
];
secretary(data);