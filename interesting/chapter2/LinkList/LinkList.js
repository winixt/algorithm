// 单向链表
const LinkNode = require('./LinkNode');

class LinkList {
    constructor(data) {
        this.head = new LinkNode();
        if (data) {
            this.head.next = new LinkNode(data, null);
        }
    }
    unshift(data) {
        const node = new LinkNode(data);
        node.next = this.head.next;
        this.head.next = node;
    }
    getHead() {
        return this.head.next;
    }
}

module.exports = LinkList;
