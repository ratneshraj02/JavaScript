/* Promise Constructor */

/*
        |->Promise Constructor : This constructor takes callback as argument
        |           */
new Promise(function (resolve, reject) {
    //write her logic
});


/*
    To create a promise call the promise constructor. the promise constructor takes a callback as an argument. the callback passed inside constructor, expects, two arguments resolve, raject then inside the callback write your logic.

 */

/*
    If you want to return something as success, then call resolve function.

    Q. When do we consider a promise fullfilled.
    If we call resolve() function, we consider it fullfilled. we consider it rejected if we call reject().
 */
/* e.g  */
function demo2(val) {
    return new Promise(function(resolve, rejcet) {
        console.log("Start");
        setTimeout(function process(){
            console.log("Completed Timer");
            if(val%2 == 0){
                //even
                resolve("Even");
            }
            else {
                //odd
                reject("Odd");
            }
        }, 10000);
        console.log("Somewher");
    });
};

/*
Note : A Promise is said to be settled if it is pending i.e if is either fullfilled or rejected.

Creation of promise object is Sync
*/