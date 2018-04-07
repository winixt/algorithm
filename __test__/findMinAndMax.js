/*
 实现性能测试工具
 1. 使用 count 统计 if else for function 运行次数
 2. 使用 performance 统计函数运行时间
 */

const utils = require('../utils');

function func() {
  const count = 1000;
  const nums = [];
  
  for (let i = 0; i < count; i++) {
    nums.push(utils.random(0, count))
  }
  
  let min = max = nums[0];
  
  for (let i = 1; i < count; i++) {
    if (nums[i] > max) {
      max = nums[i];
      
    }
    if (nums[i] < min) {
      min = nums[i]
    }
  }
  console.log(min, max);
}

func();