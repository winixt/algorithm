// 快排

// 以arr[r]为中间值，对arr[p -> r]，进行划分
// 用 i 标记划分的位置
function partition(arr, p, r) {
    const mid = arr[r];
    let i = p - 1;
    for (let j = p; j < r; ++j) {
        if (arr[j] <= mid) {
            ++i;
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    arr[r] = arr[i + 1];
    arr[i + 1] = mid;
    return i + 1;
}

function quickSort(arr, p, r) {
    if (p < r) {
        const q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

module.exports = quickSort;
