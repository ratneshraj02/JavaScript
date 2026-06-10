function isEven(num) {
    if(num%2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

//check the number between 1 to 50 to odd or even
for(let i=1; i<=50; i++){
    console.log(i,"is", isEven(i));
}