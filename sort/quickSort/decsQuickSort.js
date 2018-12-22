// 递减快排

function partition(arr, p, r) {
    const mid = arr[r];
    let i = p - 1;
    for (let j = p; j < r; ++j) {
        if (arr[j] >= mid) {
            ++i;
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    arr[r] = arr[i + 1]
    arr[i + 1] = mid;
    return i + 1;
}

function decsQuickSort(arr, p, r) {
    if (p < r) {
        const q = partition(arr, p, r);
        decsQuickSort(arr, p, q - 1);
        decsQuickSort(arr, q + 1, r);
    }
}

module.exports = decsQuickSort;
