const LinkNode = require('./LinkNode');

class LinkList {
    constructor(data) {
        if (Array.isArray(data)) {
            this.initUseArr(data);
        } else if (typeof data === 'object') {
            this.head = new LinkNode(data);
        } else {
            this.head = null;
        }
    }
    initUseArr(data) {
        data.forEach(item => {
            this.insert(item);
        });
    }
    insert(data) {
        const linkNode = new LinkNode(data);
        if (this.head) {
            linkNode.next = this.head.next;
        }
        this.head = linkNode;
    }
}

module.exports = LinkList;