// 马克思手稿的数学题

function restaurantPeople() {
    let count = 0;
    for (let x = 1; x < 10; ++x) {
        let y = 20 - 2 * x;
        let z = 30 - y - x;
        if (3 * x + 2 * y + z === 50) {
            count++;
            console.log(`${x}-${y}-${z}`);
        }
    }
    console.log(`解的个数为：${count}`);
}


// function restaurantPeople() {
//     for (let x = 1; x < 10; ++x) {
//         let y = 20 - 2 * x;
//         let z = 30 - y - x;
//         console.log(`${x}-${y}-${z}`);
//     }
//     console.log(`解的个数为：9`);
// }

restaurantPeople();