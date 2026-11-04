/*
    Given the side length of triangle in the form of 3 integers check if the given
    triangle is equilateral, scalene & Isosceles.
*/
let a = 7,
	b = 7,
	c = 7;
if (a + b > c && b + c > a && a + c > b) {
	if (a == b && b == c && c == a) {
		console.log('Equilateral Triangle');
	} else if (a != b && b != c && c != a) {
		console.log('Scalene Triangle');
	} else {
		console.log('Isosceles Triangle');
	}
} else {
	console.log('No');
}
