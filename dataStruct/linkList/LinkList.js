// 含哨兵结点的双向循环链表（可以简化链表的操作，减少空节点的判断）
// 当有大量短列表时不能使用哨兵双向循环链表，因为哨兵本身会占用大量内存

const LinkNode = require('./LinkNode');

class LinkList {
    constructor() {
        this.nil = new LinkNode();
        this.nil.prev = this.nil;
        this.nil.next = this.nil;
    }
    insert(data) {
        const linkNode = new LinkNode(data);
        linkNode.prev = this.nil;
        linkNode.next = this.nil.next;
        this.nil.next.prev = linkNode;
        this.nil.next = linkNode;
    }
    search(data) {
        let mark = this.nil.next;
        while(mark !== this.nil && data !== mark.data) {
            mark = mark.next;
        }
        return mark;
    }
    delete(data) {
        const dataNode = this.search(data);
        if (dataNode !== this.nil) {
            dataNode.prev.next = dataNode.next;
            dataNode.next.prev = dataNode.prev;
        }
    }
}

module.exports = LinkList;
