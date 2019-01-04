// 二叉树结点

class BinaryTreeNode {
    constructor(data, parent, left, right) {
        this.data = data;
        this.p = parent;
        this.left = left;
        this.right = right;
        // 可见当孩子结点不确定时，无法进行树的构建
        // 如果给定一个较大的孩子结点上线，如果只有少数的几个结点，也会浪费大量的存储空间
        // 此时可以使用左孩子右兄弟的表示方法
        // 什么是数据结构？这就是数据结构
    }
}

module.exports = BinaryTreeNode;
