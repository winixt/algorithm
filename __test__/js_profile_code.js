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
const utils = require('../utils');

function func() {
  const count = 1000;
  const nums = [];

  for (let i = 0; i < count; i++) {
    __count('BlockStatement', 7, 34)

    ;

    (function __prof() {
      const __start = performance.now();

      const __result = nums.push(utils.random(0, count));

      const __end = performance.now();

      __profileFunc('nums_push', __end - __start);

      return __result;
    })();
  }

  let min = max = nums[0];
  (function __prof() {
    const __start = performance.now();

    const __result = console.log(nums.slice(0, 10));

    const __end = performance.now();

    __profileFunc('console_log', __end - __start);

    return __result;
  })();

  for (let i = 1; i < count; i++) {
    __count('BlockStatement', 14, 34)

    ;


    /* 如果是最大值，那么不可能同时是最小值，两个 if 语句可以合并到一起，用以减少 if 的比较次数  version 1.0
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i]
    }
    */
    // 合并 if 语句 version 2.0 
    if (__count('IfStatement', 25, 4) || nums[i] < min) {
      min = nums[i];
      (function __prof() {
        const __start = performance.now();

        const __result = console.log(nums[i]);

        const __end = performance.now();

        __profileFunc('console_log', __end - __start);

        return __result;
      })();
    } else if (__count('IfStatement', 28, 11) || nums[i] > max) {
      max = nums[i];
    }
  }
  (function __prof() {
    const __start = performance.now();

    const __result = console.log(min, max);

    const __end = performance.now();

    __profileFunc('console_log', __end - __start);

    return __result;
  })();
}

(function __prof() {
  const __start = performance.now();

  const __result = func();

  const __end = performance.now();

  __profileFunc('func', __end - __start);

  return __result;
})();