/* callback application */

let arr = [1, 2, 3, 4, 5];

let x = arr.map(function pro(v, i) {
    /*
        v - value
        i - index
    */
   console.log(v, i);
   return v*v;
});

console.log(x);
console.log(arr);

/*
                |--> callback function
                |
    arr.map(function); 
        |
        |
    For all element of the given array, it passes the elements as an argument to the callback.

    arr.map(function pro(v, i) {

        some task

    });
 */