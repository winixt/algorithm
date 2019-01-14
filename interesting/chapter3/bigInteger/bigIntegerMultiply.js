// 大整数乘法

class BigIntergerStruct {
    constructor(num = [], power = 0) {
        this.s = num;
        this.power = power;
        this.len = num.length;
    }
}

class BigIntegerMultiply {
    constructor(num1, num2) {
        this.pa = new BigIntergerStruct(num1.split('').reverse().map(i => parseInt(i)), 0);
        this.pb = new BigIntergerStruct(num2.split('').reverse().map(i => parseInt(i)), 0);
    }
    cp(num, st) { // 将一个 n 位数分解为 n/2 个数
        const alNum = num.s.slice(0, st);
        const ahNum = num.s.slice(st);
        return {
            al: new BigIntergerStruct(alNum, num.power),
            ah: new BigIntergerStruct(ahNum, num.power + st)
        };
    }
    add(pa, pb) {
        if (pb.power > pa.power) {
            const tmp = pa;
            pa = pb;
            pb = tmp;
        }
        const power = pb.power;
        const k = pa.power - power; // 前面补零
        const len = Math.max(k + pa.len, pb.len);
        const num = new Array(len);
        let ta;
        let tb;
        let cc = 0;
        for (let i = 0; i < len; ++i) {
            if (i < k || i > pa.len + k - 1) {
                ta = 0;
            } else {
                ta = pa.s[i - k];
            }
            if (i < pb.len) {
                tb = pb.s[i];
            } else {
                tb = 0;
            }
            num[i] = (ta + tb + cc) % 10;
            cc = Math.floor((ta + tb + cc) / 10);
        }

        if (cc > 0) {
            num.push(cc);
        }
        return new BigIntergerStruct(num, power);
    }
    mul(pa, pb) {
        const ma = Math.floor(pa.len / 2);
        const mb = Math.floor(pb.len / 2);
        if (!ma || !mb) { // 说明pa | pb 至少有一个 len=1
            const num = [];
            if (!ma) {
                const tmp = pa;
                pa = pb
                pb = tmp;
            }
            let cc = 0;
            pa.s.forEach((elem, i) => {
                const res = elem * pb.s[0];
                num[i] = (res + cc) % 10;
                cc = Math.floor((res + cc) / 10);
            });
            if (cc > 0) {
                num.push(cc);
            }
            return new BigIntergerStruct(num, pa.power + pb.power);
        }
        const {al, ah} = this.cp(pa, ma);
        const {al: bl, ah: bh} = this.cp(pb, ma);

        const albl = this.mul(al, bl);
        const ahbl = this.mul(ah, bl);
        const albh = this.mul(al, bh);
        const ahbh = this.mul(ah, bh);

        const ans1 = this.add(albl, ahbl);
        const ans2 = this.add(albh, ahbh);
        return this.add(ans1, ans2);
    }
    run() {
        const ans = this.mul(this.pa, this.pb);
        return ans.s.reverse().join('');
    }
}

const num1 = '123456789';
const num2 = '123456789';
const bigIntegerMul = new BigIntegerMultiply(num1, num2);

console.log(bigIntegerMul.run());