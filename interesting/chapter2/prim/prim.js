// 最小生成树

const LinkList = require('./LinkList');
const PriorityQueue = require('./PriorityQueue');

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

function prim(netNodes, st) {
    
}

function main(data, n) {
    const netNodes = new Array(n).fill(new Array(n).fill(Infinity));
    data.forEach(item => {
        let {u, v, w} = item;
        --u;
        --v;
        netNodes[u][v] = netNodes[v][u] = w;
    });
    console.log(netNodes[5].head);
}

main(data, n);







