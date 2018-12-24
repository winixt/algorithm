const countingSort = require('../../sort/countingSort');

const data = [2, 5, 3, 0, 2, 3, 0, 3];
// const data = [0, 0];

const sortData = (new Array(data.length)).fill(0);

countingSort(data, sortData, 6);

console.log(sortData);