function cmp(a, b) {
  return a === b;
}

function random(min, max) {
  return min + Math.round(Math.random() * (max - min));
}

// 判断类型
const class2type = {};
'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach((item) => {
  class2type[`[object ${item}]`] = item.toLowerCase();
});
function realType(obj) {
  if (obj == null) {
    return String(obj);
  }
  return typeof obj === 'object' || typeof obj === 'function' ? 
    class2type[class2type.toString.call(obj)] || 'object' : typeof obj;
}




module.exports = {
  cmp,
  random,
  realType
}