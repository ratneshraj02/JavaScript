function isEven(num) {
    if(num % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

let x = 10;
console.log(isEven(x));

let y = 55;
console.log(isEven(y));


for(let i = 1; i <= 20; i++){
    let result = isEven(i);
    if(result == true){
        console.log(i, "Even");
    }
    else {
        console.log(i, "odd");
    }
}