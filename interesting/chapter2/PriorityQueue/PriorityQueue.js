// 优先级队列
// 可通过传参数决定使用最大优先级队列还是，最小优先级队列

class PriorityQueue {
    constructor(data, judge) {
        if (typeof data === 'function') {
            this.judge = data;
            data = [];
        } else {
            this.judge = judge;
        }
        this.data = data;
        this.heapSize = data.length;
        if (this.heapSize > 0) {
            this.buildHeap();
        }
    }
    empty() { // 判断队列是否为空
        return this.heapSize === 0;
    }
    pop() { // 删除并返回第一个元素
        if (!this.empty()) {
            const top = this.top();
            this.exchange(0, this.heapSize - 1);
            
            --this.heapSize;
            this.heapify(0);
            return top;
        }
        throw new Error('queue is empty');
    }
    
    push(key) { // 加入一个元素
        this.data[this.heapSize] = key;
        
        let flagIndex = this.heapSize;
        let parentIndex = this.getParentIndex(flagIndex);
        while (parentIndex > -1 && !this.checking(parentIndex, flagIndex)) {
            this.exchange(parentIndex, flagIndex);
            flagIndex = parentIndex;
            parentIndex = this.getParentIndex(flagIndex);
        }
        ++this.heapSize;
    }
    size() {
        return this.heapSize;
    }
    top() { // 返回第一个元素
        return this.data[0];
    }
    getParentIndex(i) {
        return Math.ceil(i / 2) - 1;
    }
    checking(l, r) {
        if (this.judge) {
            return this.judge(this.data[l], this.data[r])
        }
        return this.data[l] > this.data[r];
    }
    exchange(from, to) {
        const tmp = this.data[from];
        this.data[from] = this.data[to];
        this.data[to] = tmp;
    }
    heapify(i) { // 维护堆的过程
        const leftIndex = i * 2 + 1;
        const rightIndex = leftIndex + 1;
        let lastIndex = i;
        if (leftIndex < this.heapSize && this.checking(leftIndex, lastIndex)) {
            lastIndex = leftIndex;
        }
        if (rightIndex < this.heapSize && this.checking(rightIndex, lastIndex)) {
            lastIndex = rightIndex;
        }
        if (lastIndex !== i) {
            this.exchange(i, lastIndex);
            this.heapify(lastIndex);
        }
    }
    buildHeap() {
        const len = Math.floor(this.heapSize / 2) - 1;
        for (let i = len; i >= 0; --i) {
            this.heapify(i);
        }
    }
}

module.exports = PriorityQueue;
