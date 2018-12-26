/**
 * 链表的实现
 * 构建一个链表的时候返回一个表头
 * 可以往表尾插入数据
 */

const LinkNode = require('./linkNode');


class LinkList {
    constructor() {
        this.head = null; // 表头
        this.tail = null; // 表尾
    }
    unshift(data) {
        const lNode = new LinkNode(data, null, this.head);
        if (this.tail) {
            this.head.pre = lNode;
            this.head = lNode;
        } else {
            this.head = lNode;
            this.tail = lNode;
        }
        return this;
    }
    push(data) {
        const lNode = new LinkNode(data, this.tail);
        if (this.tail) {
            this.tail.next = lNode;
            this.tail = lNode;
        } else {
            this.head = lNode;
            this.tail = lNode;
        }
        return this;
    }
    insertAfter(lNode, referNode) {
        if (!referNode) {
            console.warn('pNode cannot null');
            return;
        }
        if (referNode === this.tail) {
            this.tail = lNode;
        }
        if (lNode.pre) {
            lNode.pre.next = lNode.next;
        }
        if (lNode.next) {
            lNode.next.pre = lNode.pre;
        }

        lNode.pre = referNode;
        lNode.next = referNode.next;
        if (referNode.next) {
            referNode.next.pre = lNode;
        }
        referNode.next = lNode;
        return this;
    }
    insertBefore(lNode, referNode) {
        if (!referNode) {
            console.warn('pNode cannot null');
            return;
        }
        if (referNode === this.head) {
            this.head = lNode;
        }
        if (lNode.pre) {
            lNode.pre.next = lNode.next;
        }
        if (lNode.next) {
            lNode.next.pre = lNode.pre;
        }

        lNode.next = referNode;
        lNode.pre = referNode.pre;
        if (referNode.pre) {
            referNode.pre.next = lNode;
        }
        referNode.pre = lNode;
        return this;
    }
}

module.exports = LinkList;
