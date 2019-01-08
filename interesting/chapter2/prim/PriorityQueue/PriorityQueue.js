// 优先级队列

class PriorityQueue {
    constructor(data = [], judge) {
        this.data = data;
        this.heapSize = data.length;
        this.clientJudge = judge;
        if (this.heapSize > 0) {
            this.buildHeap();
        }
    }
    empty() {
        return this.heapSize === 0;
    }
    top() {
        return this.data[0];
    }
    push(data) {
        this.data[this.heapSize] = data;
        let elemIndex = this.heapSize;
        ++this.heapSize;
        let parentIndex = this.getParentIndex(elemIndex);
        while(parentIndex > -1 && this.judge(parentIndex, elemIndex)) {
            this.exchange(parentIndex, elemIndex);
            elemIndex = parentIndex;
            parentIndex = this.getParentIndex(elemIndex);
        }
    }
    pop() {
        if (!this.empty()) {
            const top = this.top();
            --this.heapSize;
            this.exchange(0, this.heapSize);
            this.heapify(0);
            return top;
        }
        throw new Error('The Priority Queue Is Empty!');
    }
    getParentIndex(key) {
        return Math.ceil(key / 2) - 1;
    }
    exchange(from, to) {
        const tmp = this.data[from];
        this.data[from] = this.data[to];
        this.data[to] = tmp;
    }
    judge(i, j) {
        if (this.clientJudge) {
            return this.clientJudge(this.data[i], this.data[j])
        }
        return this.data[i] < this.data[j];
    }
    heapify(key) {
        const leftIndex = key * 2 + 1;
        const rightIndex = leftIndex + 1;
        let latestIndex = key;
        if (leftIndex < this.heapSize && this.judge(latestIndex, leftIndex)) {
            latestIndex = leftIndex;
        }
        if (rightIndex < this.heapSize && this.judge(latestIndex, rightIndex)) {
            latestIndex = rightIndex;
        }
        if (latestIndex !== key) {
            this.exchange(latestIndex, key);
            this.heapify(latestIndex);
        }
    }
    buildHeap() {
        const mid = Math.ceil(this.heapSize / 2) - 1;
        for (let i = mid; i >= 0; --i) {
            this.heapify(i);
        }
    }
}

module.exports = PriorityQueue;
