// 将 x 元素的关键字值增加到 key

function parent(i) {
    return Math.ceil(i / 2)  - 1;
}

function heapIncreaseKey(arr, x, key) {
    arr[x] = key;
    let p = Math.ceil(x/2) - 1;
    let c = x;
    while(arr[p] < arr[c]) {
        let parent = arr[p];
        arr[p] = arr[c];
        arr[c] = parent;
        let t = p;
        p = Math.ceil(c / 2) - 1;
        c = t;
    } 
}