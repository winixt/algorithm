// 递归 生成数组的全排列

const arr = ['a', 'b', 'c'];


function swap(arr, from, to) {
  const tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}

function canSwap(arr, begin, end) {
  for (let i = begin; i < end; i++) {
    if (arr[i] === arr[end]) return false; // begin - (end - 1) 不应该有和 end 相同的内容
  }
  return true;
}
function permutation(arr, begin, end) {
  if (begin === end) {
    console.log(arr.join(''))
  }
  for (let i = begin; i <= end; i++) {
    if (canSwap(arr, begin, i)) { // 去重
      swap(arr, begin, i);
      permutation(arr, begin + 1, end);
      swap(arr, begin, i);
    }
  }
}

permutation(arr, 0, 2);


