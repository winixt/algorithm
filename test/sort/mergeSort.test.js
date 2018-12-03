const mergeSort = require('../../sort/mergeSort');

const data = [5, 2, 4, 7, 1, 3, 2, 6];

mergeSort(data, 0, data.length - 1);

console.log(data);