const path = require('path');
const { performance } = require('perf_hooks');

function __count(type, line, column) {
  if (!global._count) { global._count = {}}
  const name = `${type}_${line}_${column}`;
  if (global._count[name]) {
    global._count[name]++;
  } else {
    global._count[name] = 1;
  }
}

function __profileFunc(funcName, time) {
  if (!global._profile) { global._profile = {} }
  if (global._profile[funcName]) {
    global._profile[funcName].count++;
    global._profile[funcName].time += time;
  } else {
    global._profile[funcName] = {
      count: 1,
      time,
    }
  }
}

process.on('exit', () => {
  process.send({
    count: global._count,
    profile: global._profile
  })
})
// 生成两个矩形相交的矩形

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    compare(point) {
        if (__count('IfStatement', 9, 6) || point.x >= this.x && point.y >= this.y) {
            __count('ReturnStatement', 10, 10)

            return 1;
        } else if (__count('IfStatement', 11, 13) || point.x <= this.x && point.y <= this.y) {
            __count('ReturnStatement', 12, 10)

            return -1;
        }

        __count('ReturnStatement', 14, 6)

        return 0;
    }
    copy() {
        __count('ReturnStatement', 17, 6)

        return new Point(this.x, this.y);
    }
}

class Square {
    constructor(point, width, height) {
        this.point = point;
        this.width = width;
        this.height = height;
    }
    contantPoint(point) {
        if (__count('IfStatement', 28, 6) || point.x >= this.point.x && point.y >= this.point.y && point.x <= this.point.x + this.width && point.y <= this.point.y + this.height) {
            __count('ReturnStatement', 29, 10)

            return true;
        }

        __count('ReturnStatement', 31, 6)

        return false;
    }
    intersection(r) {
        // 垂直相离
        if (__count('IfStatement', 35, 6) || this.point.y + this.height <= r.point.y || this.point.y >= r.point.y + r.height) {
            __count('ReturnStatement', 36, 10)

            return null;
        }
        // 水平相离
        if (__count('IfStatement', 39, 6) || this.point.x + this.width <= r.point.x || this.point.x >= r.point.x + r.width) {
            __count('ReturnStatement', 40, 10)

            return null;
        }

        // 直接计算矩形交叉最小点 + 宽 + 高
        if (__count('IfStatement', 44, 6) || function __prof() {
            const __start = performance.now();

            const __result = this.contantPoint(r.point);

            const __end = performance.now();

            __profileFunc('contantPoint', __end - __start);

            return __result;
        }.apply(this)) {
            // 以 r 的最小点为交叉最小点
            let Iwidth = function __prof() {
                const __start = performance.now();

                const __result = Math.min(r.width, this.point.x + this.width - r.point.x);

                const __end = performance.now();

                __profileFunc('min', __end - __start);

                return __result;
            }.apply(this);
            let Iheight = function __prof() {
                const __start = performance.now();

                const __result = Math.min(r.height, this.point.y + this.height - r.point.y);

                const __end = performance.now();

                __profileFunc('min', __end - __start);

                return __result;
            }.apply(this);

            __count('ReturnStatement', 47, 10)

            return new Square(function __prof() {
                const __start = performance.now();

                const __result = r.point.copy();

                const __end = performance.now();

                __profileFunc('r_point_copy', __end - __start);

                return __result;
            }(), Iwidth, Iheight);
        }
        // 以自身的最小点为交叉最小点 （这两块可以合并为一个函数）
        let Iwidth = function __prof() {
            const __start = performance.now();

            const __result = Math.min(this.width, r.point.x + r.width - this.point.x);

            const __end = performance.now();

            __profileFunc('min', __end - __start);

            return __result;
        }.apply(this);
        let Iheight = function __prof() {
            const __start = performance.now();

            const __result = Math.min(this.height, r.point.y + r.height - this.point.y);

            const __end = performance.now();

            __profileFunc('min', __end - __start);

            return __result;
        }.apply(this);

        __count('ReturnStatement', 52, 6)

        return new Square(function __prof() {
            const __start = performance.now();

            const __result = this.point.copy();

            const __end = performance.now();

            __profileFunc('point', __end - __start);

            return __result;
        }.apply(this), Iwidth, Iheight);
    }
}

const contact1 = new Square(new Point(0, 0), 5, 5);
const contact2 = new Square(new Point(0, 0), 2, 2);
(function __prof() {
    const __start = performance.now();

    const __result = console.log(contact1.intersection(contact2), '包含');

    const __end = performance.now();

    __profileFunc('console_log', __end - __start);

    return __result;
})();

const dis1 = new Square(new Point(0, 0), 5, 5);
const dis2 = new Square(new Point(5, 5), 1, 1);
(function __prof() {
    const __start = performance.now();

    const __result = console.log(dis1.intersection(dis2), '相离');

    const __end = performance.now();

    __profileFunc('console_log', __end - __start);

    return __result;
})();

const intersect1 = new Square(new Point(0, 0), 5, 5);
const intersect2 = new Square(new Point(2, 2), 6, 6);
(function __prof() {
    const __start = performance.now();

    const __result = console.log(intersect1.intersection(intersect2), '相交');

    const __end = performance.now();

    __profileFunc('console_log', __end - __start);

    return __result;
})();