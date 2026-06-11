// function dummyPromise (){
//     return new Promise( function f(resolve, reject){
//         setTimeout(function(){
//             resolve("Timer's Promise");
//         },10000);
//     });
// }

console.log("Start the file");

setTimeout(function timer1(){
    console.log("Timer-1 is done");
    let y = Promise.resolve("Immediately promise");
    y.then( function promiseY(value){
        console.log("whose promise :",value)
    });

},0);

let x = Promise.resolve("Sanket's promise");
x.then( function (value) {
    console.log("whose Promise ?",value)
})

setTimeout( function timer2() {
    console.log("timer-2 is done");
},0);

console.log("End the file");