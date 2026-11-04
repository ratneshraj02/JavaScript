/*
    Given a number x, calculate the sum of digits of the number x.
*/

function sumOfDigit(num) {
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(rem/10);
    }

    return sum;
}

console.log(sumOfDigit(123));