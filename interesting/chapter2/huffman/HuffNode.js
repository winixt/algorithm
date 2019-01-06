// 哈夫曼结点

class HuffNode {
  constructor(params) {
    const { weight, parent, lchild, rchild, value } = params;
    this.weight = weight;
    this.parent = parent;
    this.lchild = lchild;
    this.rchild = rchild;
    this.value = value;
  }
}

module.exports = HuffNode;