// 迪科斯彻 求单源最短路径问题的贪心算法
// 使用优先级队列查找最短路径, 使用邻接表存储边
// 时间复杂度 O(n*lgn + E*lgn)

const PriorityQueue = require('../PriorityQueue');
const LinkList = require('../LinkList');

const data = [
    [{u: 1, step: 2}, {u: 2, step: 3}],
    [{u: 2, step: 5}, {u: 3, step: 6}],
    [{u: 3, step: 7}, {u: 4, step: 1}],
    [{u: 4, step: 4}]
];


function main(data, n, st) {
    const linkData = [];
    for (let i = 0; i < n; ++i) {
        linkData[i] = new LinkList();
        const item = data[i];
        if (item) {
            for (let j = 0; j < item.length; ++j) {
                linkData[i].unshift(item[j]);
            }
        }
    }
    dijkstra(linkData, n, st);
}

function findPath(dist, st) {
    const n = dist.length;
    console.log(`源点为：${st}`)
    for (let i = 0; i < n; ++i) {
        console.log(`源点到 ${i} 的最短路径为：${dist[i]}`);
    }
}

function dijkstra(linkData, n, st) {
    const dist = (new Array(n)).fill(Infinity);
    const flag = new Array(n).fill(false);
    const stDist = [];
    let stLink = linkData[st].getHead();
    while (stLink) {
        const {u, step} = stLink.data;
        dist[u] = step;
        stDist.push(stLink.data);
        stLink = stLink.next;
    }
    flag[st] = true;
    dist[st] = 0;
    const queue = new PriorityQueue(stDist, (elem1, elem2) => {
        return elem1.step < elem2.step;
    });
    
    // 找出 V - S 中且在 dist 中最小的
    // 从 V - S 中移除，并加入 S
    // 加入 S 的过程中，更新 dist，记录 p
    // 循环
    while (!queue.empty()) {
        const top = queue.pop();
        if (flag[top.u]) continue;

        dist[top.u] = top.step;
        flag[top.u] = true;
        let link = linkData[top.u].getHead();
        while (link) {
            const {u, step} = link.data;
            if (dist[u] > dist[top.u] + step) {
                queue.push({
                    u,
                    step: dist[top.u] + step
                }); // queue 会有冗余的点，为了避免修改 queue 中的值带来高代价
            }
            link = link.next;
        }
    }
    findPath(dist, st);
}

main(data, 5, 0);
