// 编辑距离
/**
 * 递归式
 * min{c[i][j - 1] + 1, c[i-1][j] + 1, c[i - 1][j - 1] + diff(xi, yj)}
 */

function print() {

}

function diff(elem1, elem2) {
  return elem1 === elem2 ? 0 : 1;
}

function min(elem1, elem2, elem3) {
  let minElem = elem1;
  if (minElem > elem2) {
    minElem = elem2;
  }
  if (minElem > elem3) {
    minElem = elem3;
  }
  return minElem;
}

function editDistance(s1, s2) {
  const cache = new Array(s1.length + 1);
  for (let i = 0; i <= s1.length; ++i) {
    let arr = new Array(s2.length + 1);
    if (i === 0) {
      arr = Array.from(arr, (value, index) => index);
    }
    arr[0] = i;
    cache[i] = arr;
  }

  for (let i = 0; i < s1.length; ++i) {
    for (let j = 0; j < s2.length; ++j) {
      cache[i + 1][j + 1] = min(cache[i + 1][j] + 1, cache[i][j + 1] + 1, cache[i][j] + diff(s1[i], s2[j]));
    }
  }
  console.log(cache);
  console.log('编辑距离为：' + cache[s1.length][s2.length]);
}

function main(s1, s2) {
  editDistance(s1, s2);
}


const s1 = 'family';
const s2 = 'frame';
// 期望输出 4
main(s1, s2);