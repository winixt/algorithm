const rDebug = require('debug')('recursive');
const aDebug = require('debug')('useArrayOptimization');
const cDebug = require('debug')('cacheOptimization');
const recursive = require('../../interesting/chapter1/fib/recursive');
const useArrayOptimization = require('../../interesting/chapter1/fib/useArrayOptimization');
const cacheOptimization = require('../../interesting/chapter1/fib/cacheOptimization');

rDebug(recursive(9))

console.log('+++++++++++++++++++++++++++++++++++++');
aDebug(useArrayOptimization(1))
aDebug(useArrayOptimization(2))
aDebug(useArrayOptimization(3))
aDebug(useArrayOptimization(9))

console.log('+++++++++++++++++++++++++++++++++++++');
cDebug(cacheOptimization(1))
cDebug(cacheOptimization(2))
cDebug(cacheOptimization(3))
cDebug(cacheOptimization(9))
