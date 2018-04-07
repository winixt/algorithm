function cmp(a, b) {
  return a === b;
}

function random(min, max) {
  return min + Math.round(Math.random() * (max - min));
}

module.exports = {
  cmp,
  random
}