/*
    Given 3 integers a, b, c check if we can form a triangle with the side of the
    triangle with the side of the triangle having length a, b an c.
*/
let a=7, b=10, c=5;

if((a+b >= c) && (b+c >= a) && (a+c >= b)) {
    console.log("Yes");
}
else {
    console.log("No");
}