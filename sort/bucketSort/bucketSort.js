// 桶排序
const LinkNode = require('./linkNode');
const LinkList = require('./linkList');

function insertSort(link, data) {
    let iteration = link.head;
    while(iteration) {
        if (iteration.data > data) {
            link.insertBefore(new LinkNode(data), iteration);
            break;
        }
        iteration = iteration.next;
    }
    if (!iteration) {
        link.push(data);
    }
}

function getLinkData(link) {
    const data = [];
    let iteration = link.head;
    while(iteration) {
        data.push(iteration.data);
        iteration = iteration.next;
    }
    return data;
}

function bucketSort(A) {
    const n = A.length;
    const B = new Array(A.length);
    for (let i = 0; i < n; ++i) {
        B[i] = new LinkList();
    }

    for (let i = 0; i < n; ++i) {
        let bucket = Math.floor(n * A[i]);
        insertSort(B[bucket], A[i]);
    }
    return B.reduce((ret, link) => {
        return ret.concat(getLinkData(link));
    }, []);
}

module.exports = bucketSort;
