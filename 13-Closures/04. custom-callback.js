
function mapper(arr, fun) {
    /*
        arr -> is going to be array of element
        fun -> callback function which expects two arguments value and index.
    */
    let result = [];
    for(let i = 0; i <= arr.lenght; i++) {
        //i -> index, arr[i] -> value

        let res = fun(arr[i], i);
        return arr.push(res);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];
let x = mapper(arr, function cube(v, i){
    console.log(v*v*v, i);
    return v*v*v;
});
console.log(x, arr);