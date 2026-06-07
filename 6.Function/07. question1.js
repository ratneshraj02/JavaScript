/*
    Given a number x, write a function to determine whether the number is a prime
    number or not??
 */
function isPrime(x) {
    if(x == 1){
        return true;
    }
    for(let i=2; i<=x; i++){
        if(x%i == 0){
            // we found a number in range[2 to x-1] which divides x
            // hence x is non prime
            return false;
        }
        /*
        The loop completed but we didn't return false, that means
        no number in the range [2, x-1] can divide x hence
        x is prime
    */
        return true;
    }
}

console.log(isPrime(67));
console.log(isPrime(6));
console.log(isPrime(11));
console.log(isPrime(12));