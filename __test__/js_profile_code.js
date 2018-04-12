const path = require('path');
const { performance } = require('perf_hooks');

function __count(type, line, column) {
  if (!global._count) { global._count = {}}
  const name = `${type}_${line}_${column}`;
  if (global._count[name]) {
    global._count[name]++;
  } else {
    global._count[name] = 1;
  }
}

function __profileFunc(funcName, time) {
  if (!global._profile) { global._profile = {} }
  if (global._profile[funcName]) {
    global._profile[funcName].count++;
    global._profile[funcName].time += time;
  } else {
    global._profile[funcName] = {
      count: 1,
      time,
    }
  }
}

process.on('exit', () => {
  process.send({
    count: global._count,
    profile: global._profile
  })
})
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
    __count('BlockStatement', 12, 34)

    ;

    (function __prof() {
      const start = performance.now();
      const result = nums.push(utils.random(0, count));
      const end = performance.now();

      __profileFunc('nums_push', end - start);

      return result;
    })();
  }

  let min = max = nums[0];

  for (let i = 1; i < count; i++) {
    __count('BlockStatement', 18, 34)

    ;

    if (__count('IfStatement', 19, 4) || nums[i] > max) {
      max = nums[i];
    }
    if (__count('IfStatement', 23, 4) || nums[i] < min) {
      min = nums[i];
    }
  }
  (function __prof() {
    const start = performance.now();
    const result = console.log(min, max);
    const end = performance.now();

    __profileFunc('console_log', end - start);

    return result;
  })();
}

(function __prof() {
  const start = performance.now();
  const result = func();
  const end = performance.now();

  __profileFunc('func', end - start);

  return result;
})();