const numbs = [1, 2, 3, 4];
// const multiple3 = numbs.map((num, i, array) => {
//     return num * 3;
// });
// console.log('multiple3: ', multiple3);

Array.prototype.myMap = function (cb) {
    let result = [];
    const array = this;
    for(let i = 0; i < array.length ; i++) {
        result.push(cb(array[i], i, array));
    }

    return result;
}

const mul4 = numbs.myMap((num, i, array) => {
    return num * 4;
});
console.log('mul4: ', mul4);
