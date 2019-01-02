// 背包问题

function random(min, max) {
    return min + Math.round((max - min) * Math.random());
}

function exchange(arr, from, to) {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

function judge(arr, j, mid, check) {
    if (check) {
        return check(arr[j], arr[mid]);
    }
    return arr[j] <= arr[mid];
}

function randomPartition(arr, p, r, check) {
    exchange(arr, random(p, r), r);
    let mark = p - 1;
    for (let j = p; j < r; ++j) {
        if (judge(arr, j, r, check)) {
            mark++;
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

const data = [
    { w: 4, v: 3 },
    { w: 2, v: 8 },
    { w: 9, v: 18 },
    { w: 5, v: 6 },
    { w: 5, v: 8 },
    { w: 8, v: 20 },
    { w: 5, v: 5 },
    { w: 4, v: 6 },
    { w: 5, v: 7 },
    { w: 5, v: 15 }
];

function package(data, weight) {
    for (let elem of data) {
        elem.p = elem.v / elem.w;
    }
    quickSort(data, 0, data.length - 1, (elem1, elem2) => {
        return elem1.p >= elem2.p;
    });
    let sum = 0;
    for (let elem of data) {
        if (elem.w <= weight) {
            sum += elem.v;
            weight -= elem.w;
        } else {
            sum += weight * elem.p;
            break;
        }
    }
    return sum;
}

console.log(package(data, 30));