/**
 * 插入排序之原址排序（最多只有常熟个数字存储在数组外）
 * @param {Array} arr 待排序数组
 * @return {Array} 排序好的数组
 */
function insertionSort(arr) {
   for(let j = 1; j < arr.length; ++j) {
        let i = j - 1;
        const tmpElem = arr[j];
        while(i > -1 && arr[i] > tmpElem) {
            arr[i + 1] = arr[i];
            --i;
        }
        arr[i + 1] = tmpElem;
   }
   return arr;
}

module.exports = insertionSort;
