const maxSubArray = require('../../find/maxSubArray/recursive');
const maxSubArrayDP = require('../../find/maxSubArray/dp');

const data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];


console.log(maxSubArray(data, 0, data.length - 1));
console.log(maxSubArrayDP(data))