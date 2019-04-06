/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const selects = [];
    for (let item of special) {
        let newNeeds = [];
        const len = item.length - 1;
        for (let i = 0; i < len; ++i) {
            if (item[i] > needs[i]) {
                newNeeds = null;
                break;
            } else {
                newNeeds[i] = needs[i] - item[i];
            }
        }
        if (newNeeds) {
            selects.push(
                item[len] + shoppingOffers(price, special, newNeeds)
            );
        }
    }
    selects.push(
        needs.reduce((acc, cur, idx) => {
            return acc + cur * price[idx];
        }, 0)
    );

    return Math.min(...selects);
};
const data = [2, 3, 4]
const data1 = [[1, 1, 0, 4], [2, 2, 1, 9]];
const data2 = [1, 2, 1];
console.log(shoppingOffers(data, data1, data2));