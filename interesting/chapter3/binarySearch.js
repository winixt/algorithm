// 二分查找

// 递归法
function recursionBinarySearch(data, p, r, key) {
    if (r >= p) {
        const mid = Math.floor((p + r) / 2);
        if (data[mid] === key) {
            return mid;
        } else if (data[mid] > key) {
            return binarySearch(data, p, mid - 1, key);
        } else {
            return binarySearch(data, mid + 1, r, key);
        }
    } else {
        return null;
    }
}


function binarySearch(data, low,high, key) {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (data[mid] === key) {
            return mid;
        } else if (data[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('recursion:', recursionBinarySearch(data, 0, data.length - 1, 8));
console.log('normal:', binarySearch(data, 0, data.length - 1, 8));