function dummyPromise (){
    return new Promise( function f(resolve, reject){
        setTimeout(function(){
            resolve("Timer's Promise");
        },0);
    });
}

console.log("Start the file");