// 最小生成树之 kruskal 算法
const quickSort = require('./quickSort');

const data = [
    {u: 1, v: 2, w: 23},
    {u: 1, v: 6, w: 28},
    {u: 1, v: 7, w: 36},
    {u: 2, v: 3, w: 20},
    {u: 2, v: 7, w: 1},
    {u: 3, v: 4, w: 15},
    {u: 3, v: 7, w: 4},
    {u: 4, v: 5, w: 3},
    {u: 4, v: 7, w: 9},
    {u: 5, v: 6, w: 17},
    {u: 5, v: 7, w: 16},
    {u: 6, v: 7, w: 25},
]
const n = 7;

class Kruskal {
    constructor(data = [], n) {
        this.data = data; // 已排好序数组
        this.n = n;
        this.edgeCount = data.length;
        this.father = new Array(n);
        this.initFather();
    }
    initFather() {
        for (let i = 0; i < this.n; ++i) {
            this.father[i] = i;
        }
    }
    find(id) {
        if (this.father[id] !== id) {
            this.father[id] = this.find(this.father[id]);
        }
        return this.father[id];
    }
    merge(id1, id2) {
        const setId1 = this.find(id1);
        const setId2 = this.find(id2);
        if (setId1 === setId2) {
            return 0;
        }
        if (setId1 < setId2) {
            this.father[id2] = setId1;
        } else {
            this.father[id1] = setId2;
        }
        return 1;
    }
    spaning() {
        let ans = 0;
        let mark = this.n - 1;
        let tmp = [];
        for (let i = 0; i < this.edgeCount; ++i) {
            const {u, v, w} = this.data[i];
            if (this.merge(u, v)) {
                tmp.push(w);
                ans += w;
                --mark;
                if (mark === 0) break;
            }
        }
        console.log(tmp);
        return ans;
    }
    
}

function main(data, n) {
    data.forEach(item => {
        --item.u;
        --item.v;
    });
    quickSort(data, (elem1, elem2) => {
        return elem1.w < elem2.w;
    });
    
    const kruskal = new Kruskal(data, n);
    console.log(kruskal.spaning());
}

main(data, n);