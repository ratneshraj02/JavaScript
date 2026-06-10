/*
    Given the side length of triangle in the form of 3 intergers check if the given
    triangle is equilateral, scalene & Isosedes.
*/
let a=7, b=7, c=7;
if((a+b >c) && (b+c > a) && (a+c > b)) {
    if((a==b) && (b==c) && (c==a)) {
        console.log("Equilateral Triangle");
    }
    else if((a != b) && (b != c) && (c != a)) {
        console.log("Scalene Triagle");
    }
    else {
        console.log("Isoscelest Triangle");
    }
}
else {
    console.log("No");
}