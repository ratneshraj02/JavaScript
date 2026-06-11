function dummyPromise (){
    return new Promise( function f(resolve, reject){
        setTimeout(function(){
            resolve("Timer's Promise");
        },10000);
    });
}

console.log("Start the file");

setTimeout(function timer1(){
    console.log("Timer-1 is done");
    let y = dummyPromise();
    y.then( function promiseY(value){
        console.log("whose promise :",value)
    });

},0);

setTimeout( function timer2() {
    console.log("timer-2 is done");
},0);

console.log("End the file");