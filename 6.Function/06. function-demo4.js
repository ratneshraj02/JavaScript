function add(x, y = 10){  // here x and y are parameters
    let c = x + y;
    return c;
}

let a = 10;
let b = 60;
let res = add(a , b);  // here a and b are arguments
console.log(res);

/*
    here we are passing add(3, 5) inside console.log()
    so first of all add(3, 5) will be processed
    so add(3, 5) will be retuned
    and than once we have the value processed as 8, than
    console.log will printed 8.
*/
console.log(add(3));

 
