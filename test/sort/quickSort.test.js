const quickSort = require('../../sort/quickSort');
const decsQuickSort = require('../../sort/quickSort/decsQuickSort');

const data = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

decsQuickSort(data, 0, data.length - 1);

console.log(data);