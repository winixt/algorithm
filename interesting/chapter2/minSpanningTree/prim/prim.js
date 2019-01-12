// 最小生成树
// 避圈法：每次选择两个集合中的相连的最小边

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
    const n = netNodes.length;
    const closest = new Array(n).fill(st);
    const lowcost = new Array(n);
    const flag = new Array(n).fill(false);
    netNodes[st].forEach((item, index) => {
        lowcost[index] = item;
    });
    closest[st] = -1;
    lowcost[st] = 0;
    flag[st] = true;
    for (let i = 1; i < n; ++i) {
        let min = Infinity;
        let minKey = -1;
        for (let j = 0; j < n; ++j) {
            if (!flag[j] && lowcost[j] < min) {
                min = lowcost[j];
                minKey = j;
            }
        }
        if (minKey !== -1) {
            flag[minKey] = true;
            netNodes[minKey].forEach((item, index) => {
                if (!flag[index] && lowcost[index] > item) {
                    lowcost[index] = item;
                    closest[index] = minKey;
                }
            });
        } else {
            console.log('无法构成最小生成树！');
        }
    }
    console.log(closest);
    console.log(lowcost);
    console.log(lowcost.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0))

}

function main(data, n, st) {
    const netNodes = new Array(n);
    for (let i = 0; i < n; ++i) {
        netNodes[i] = new Array(n).fill(Infinity);
    }
    data.forEach(item => {
        let {u, v, w} = item;
        --u;
        --v;
        netNodes[u][v] = netNodes[v][u] = w;
    });
    prim(netNodes, st)
}

main(data, n, 0);


