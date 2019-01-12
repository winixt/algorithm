// 快排
function random(min, max) {
    return min + Math.round((max - min) * Math.random());
}

function exchange(arr, from, to) {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}

function randomPartition(arr, p, r, comp) {
    exchange(arr, random(p, r), r);
    const compElem = arr[r];
    let mark = p - 1;
    for (let i = p; i < r; ++i) {
        if (comp(arr[i], compElem)) {
            mark++;
            exchange(arr, i, mark);
        }
    }
    exchange(arr, mark + 1, r);
    return mark + 1;

}

function quickSort(arr, p, r, comp) {
    if (p < r) {
        const q = randomPartition(arr, p, r, comp);
        quickSort(arr, p, q - 1, comp);
        quickSort(arr, q + 1, r, comp);
    }
}

function compare(elem1, elem2) {
    return elem1 < elem2;
}

function main(arr, comp) {
    comp = comp || compare;
    quickSort(arr, 0, arr.length - 1, comp);
}

module.exports = main;