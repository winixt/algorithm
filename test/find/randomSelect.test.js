const randomSelect = require('../../find/randomSelect');
const quickSort = require('../../sort/quickSort');

const data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];

console.log(randomSelect(data, 0, data.length - 1, 14));

quickSort(data, 0, data.length - 1);
console.log(data);