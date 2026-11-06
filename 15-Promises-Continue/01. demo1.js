console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
});

for(let i = 1; i < 100000000; i++){
    //do something
}

let x = Promise.resolve("Sanket's promise");
x.then(function processValue(value){
    console.log("whose promise :",value);
});

setTimeout(function(){
    console.log("Timer 2 done");
});


console.log("End of the file");