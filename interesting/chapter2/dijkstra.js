// 迪科斯彻 求单源最短路径问题的贪心算法

const data = [
    [Infinity, 16, 15, Infinity, 12],
    [29, Infinity, Infinity, 13, Infinity],
    [21, Infinity, Infinity, 7, Infinity],
    [Infinity, 27, 19, Infinity, Infinity],
    [8, 32, Infinity, Infinity, Infinity]
];

function findPath(dist, p, st) {
    const n = dist.length;
    console.log(`源点为：${st}`)
    for (let i = 0; i < n; ++i) {
        let x = p[i];
        let s = [];
        while(x !== -1) {
            s.push(x);
            x = p[x];
        }
        s.reverse();
        s.push(i);
        console.log(`源点到 ${i} 的最短路径为：${s.join('——')}；最短路径为：${dist[i]}`);
    }
}

function dijkstra(data, st) {
    const n = data.length;
    const dist = (new Array(n)).fill(Infinity);
    const p = new Array(n);
    const flag = new Map();
    for (let i = 0; i < n; ++i) { // 初始化
        if (i !== st) {
            flag.set(i, data[st][i]);
        }
        if (data[st][i] !== Infinity) {
            p[i] = st;
        } else {
            p[i] = -1;
        }
    }
    dist[st] = 0;
    
    // 找出 V - S 中且在 dist 中最小的
    // 从 V - S 中移除，并加入 S
    // 加入 S 的过程中，更新 dist，记录 p
    // 循环
    for (let i = 1; i < n; ++i) {
        let min = Infinity;
        let minKey = -1;
        for (let [key, value] of flag.entries()) {
            if (min > value) {
                minKey = key;
                min = value;
            }
        }
        if (minKey !== -1) {
            dist[minKey] = min;
            flag.delete(minKey);
            for (let [key, value] of flag.entries()) {
                if (value > dist[minKey] + data[minKey][key]) {
                    p[key] = minKey;
                    flag.set(key, dist[minKey] + data[minKey][key]);
                }
            }
        } else {
            // 源结点到剩余结点不通
            break;
        }
    }
    console.log(p);
    findPath(dist, p, st);
}

dijkstra(data, 4);
