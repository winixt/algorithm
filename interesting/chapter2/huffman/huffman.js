// 哈夫曼编码
// 假设字符分布均匀，采用等长的编码可以带来最优的空间，每个字符长度 Math.ceil(lgn)
// 如果字符分布不均匀，根据字符的使用频率进行编码，频率越高，编码越短，通常能带来较好的性能空间
// 哈夫曼编码就是一种不等长编码算法，算法的策略为贪心策略

const HuffNode = require('./HuffNode');
const PriorityQueue = require('./PriorityQueue');


function huffTree(data) {
  const queueData = [];
  const tree = [];
  for (let elem of data) {
    const huffNode = new HuffNode({
      weight: parseInt(elem.weight * 100),
      parent: -1,
      lchild: -1,
      rchild: -1,
      value: elem.value
    });
    queueData.push(huffNode);
    tree.push(huffNode);
  }
  
  const queue = new PriorityQueue(queueData, (elem1, elem2) => {
    return elem1.weight < elem2.weight;
  });
  while (queue.size() > 1) {
    const small = queue.pop();
    const nextSmall = queue.pop();
    const huffNode = new HuffNode({
      weight: small.weight + nextSmall.weight,
      parent: -1,
      lchild: small,
      rchild: nextSmall,
    });
    small.parent = huffNode;
    nextSmall.parent = huffNode;
    queue.push(huffNode);
    tree.push(huffNode);
  }
  console.log(tree.length);
  return tree
}

function huffCode(tree) {
  const cacheCode = new Map();
  for (let treeNode of tree) {
    let mark = treeNode;
    let bit = [];
    while (mark.parent !== -1) {
      const parent = mark.parent;
      const cache = cacheCode.get(parent);
      if (cache) {
        bit = cache.concat(bit);
        break;
      }
      if (parent.lchild === mark) {
        bit.unshift(0)
      } else {
        bit.unshift(1);
      }
      mark = mark.parent;
    }
    if (treeNode.value) {
      console.log(`${treeNode.value}: Huffman code is: ${bit.join('')}`);
    }
    cacheCode.set(treeNode, bit);
  }
}

const data = [
  {value: 'a', weight: 0.05},
  {value: 'b', weight: 0.32},
  {value: 'c', weight: 0.18},
  {value: 'd', weight: 0.07},
  {value: 'e', weight: 0.25},
  {value: 'f', weight: 0.13},
];

function main(data) {
  const tree = huffTree(data);
  huffCode(tree);
}

main(data);