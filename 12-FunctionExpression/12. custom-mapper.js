/* Making custom mapper */

function print(idx, element) {
    return `Element at index ${idx} is ${element}`;
}

function customMapper(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(func(arr[i], i));
    }
    return res;
}

const newArr = [9, 8, 6, 5, 4, 6];

const value = customMapper(newArr, print);
console.log(value);