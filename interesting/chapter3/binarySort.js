// 归并排序
// 基本思想，将数组分成更小的数组，进行排序，然后将排序后的数组进行合并

function merge(arr, p, q, r) {
    let lArr = arr.slice(p, q + 1);
    let rArr = arr.slice(q + 1, r + 1);
    lArr.push(Infinity);
    rArr.push(Infinity);
    for (let i = p; i <= r; ++i) {
        if (lArr[0] > rArr[0]) {
            arr[i] = rArr.shift();
        } else {
            arr[i] = lArr.shift();
        }
    }
}

function binarySort(arr, p, r) {
    if (p === r) {
        return arr[p];
    }
    const q = Math.floor((p + r) / 2);
    binarySort(arr, p, q);
    binarySort(arr, q + 1, r);
    merge(arr, p, q, r);
}

const data = [42, 15, 20, 6, 8, 38, 50, 12];

function main(data) {
    binarySort(data, 0, data.length - 1);
    console.log(data);
}

main(data);
