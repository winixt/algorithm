const quickSort = require('../../sort/quickSort');
const decsQuickSort = require('../../sort/quickSort/decsQuickSort');
const randomQuickSort = require('../../sort/quickSort/randomQuickSort');

const data = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

randomQuickSort(data, 0, data.length - 1);

console.log(data);