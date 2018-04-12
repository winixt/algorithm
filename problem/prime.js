// 查找素数

function prime(n) {
  const result = Math.sqrt(n);
  for (let i = 2; i <= result; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  const n = 1000;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (prime(i)) {
      count++;
    }
  }
  console.log(count, '+++++++++++++');
}

main();

