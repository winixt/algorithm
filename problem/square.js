// 生成两个矩形相交的矩形

class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  compare(point) {
      if (point.x >= this.x && point.y >= this.y) {
          return 1;
      } else if (point.x <= this.x && point.y <= this.y) {
          return -1;
      }
      return 0;
  }
  copy() {
      return new Point(this.x,this.y);
  }
}

class Square {
  constructor(point, width, height) {
      this.point = point;
      this.width = width;
      this.height = height;
  }
  contantPoint(point) {
      if ((point.x >= this.point.x && point.y >= this.point.y) && (point.x <= this.point.x + this.width && point.y <= this.point.y + this.height)) {
          return true;
      }
      return false;
  }
  intersection(r) {
      // 垂直相离
      if (this.point.y + this.height <= r.point.y || this.point.y >= r.point.y + r.height) {
          return null;
      }
      // 水平相离
      if (this.point.x + this.width <= r.point.x || this.point.x >=  r.point.x + r.width) {
          return null;
      }
      
      // 直接计算矩形交叉最小点 + 宽 + 高
      if (this.contantPoint(r.point)) {  // 以 r 的最小点为交叉最小点
          let Iwidth = Math.min(r.width, this.point.x + this.width - r.point.x);
          let Iheight = Math.min(r.height, this.point.y + this.height - r.point.y);
          return new R(r.point.copy(), Iwidth, Iheight);
      }
      // 以自身的最小点为交叉最小点 （这两块可以合并为一个函数）
      let Iwidth = Math.min(this.width, r.point.x + r.width - this.point.x);
      let Iheight = Math.min(this.height, r.point.y + r.height - this.point.y);
      return new R(this.point.copy(), Iwidth, Iheight);
  }
}



const contact1 = new Square(new Point(0, 0), 5, 5);
const contact2 = new Square(new Point(0, 0), 2, 2);
console.log(contact1.intersection(contact2), '包含');

const dis1 = new Square(new Point(0, 0), 5, 5);
const dis2 = new Square(new Point(5, 5), 1, 1);
console.log(dis1.intersection(dis2), '相离');

const intersect1 = new Square(new Point(0, 0), 5, 5);
const intersect2 = new Square(new Point(2, 2), 6, 6);
console.log(intersect1.intersection(intersect2), '相交');
