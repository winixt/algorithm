// 用堆实现优先级队列

class PriorityQueue {
  constructor(data, judge) {
    this.data = data;
    this.clientJudge = judge;
    this.heapSize = data.length;
    if (this.heapSize > 0) {
      this.buildHeap()
    }
  }
  empty() {
    return this.heapSize === 0;
  }
  push(elem) {
    let elemKey = this.heapSize;
    this.data[elemKey] = elem;
    ++this.heapSize;
    
    let parentKey = this.getParentIndex(elemKey);
    while (parentKey > -1 && this.judge(elemKey, parentKey)) {
      this.exchange(elemKey, parentKey);
      elemKey = parentKey;
      parentKey = this.getParentIndex(elemKey);
    }
    return elem;
  }
  pop() {
    if (this.empty()) throw new Error('The Priority Queue Is Empty');

    const top = this.top();
    this.exchange(0, this.heapSize - 1);
    --this.heapSize;
    this.heapify(0);
    return top;
  }
  top() {
    return this.data[0];
  }
  size() {
    return this.heapSize;
  }
  getParentIndex(key) {
    return Math.ceil(key / 2) - 1;
  }
  judge(lKey, rKey) {
    if (this.clientJudge) {
      return this.clientJudge(this.data[lKey], this.data[rKey]);
    }
    return this.data[lKey] > this.data[rKey];
    
  }
  exchange(from, to) {
    const tmp = this.data[from];
    this.data[from] = this.data[to];
    this.data[to] = tmp
  }
  heapify(key) {
    const lIndex = key * 2 + 1;
    const rIndex = lIndex + 1;
    let latestIndex = key;
    if (lIndex < this.heapSize && this.judge(lIndex, latestIndex)) {
      latestIndex = lIndex;
    }
    if (rIndex < this.heapSize && this.judge(rIndex, latestIndex)) {
      latestIndex = rIndex;
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
