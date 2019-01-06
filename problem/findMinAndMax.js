/* 
  查找随机 1000 个数字中的最大值，最小值
  @authore qlin
*/
const utils = require('../utils');

function func() {
  const count = 1000;
  const nums = [];
  
  for (let i = 0; i < count; i++) {
    nums.push(utils.random(0, count))
  }
  
  let min = max = nums[0];
  console.log(nums.slice(0, 10))
  
  for (let i = 1; i < count; i++) {
    
    /* 如果是最大值，那么不可能同时是最小值，两个 if 语句可以合并到一起，用以减少 if 的比较次数  version 1.0
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i]
    }
    */
    // 合并 if 语句 version 2.0 
    if (nums[i] < min) {
      min = nums[i];
      console.log(nums[i]);
    } else if (nums[i] > max) {
      max = nums[i]
    } 
  }
  console.log(min, max);
}

func();