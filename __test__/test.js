(function __prof() {
  console.log('hello 1')
})();

for (let i = 0; i < 10; i++) {
  (function __prof() {
    console.log('hello 2')
  })();
}
