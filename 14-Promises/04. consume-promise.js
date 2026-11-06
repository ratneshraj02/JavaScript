/* Consume a Promise */
/*
    The Promise consumption is the main beauty, using which we will avoid inversion of control.

    Whenever we call a function, returning a promise, we will get a promise object which is like any JS object that we can store in a variable.

    Now, the question, will JS wait here??

    let response = fetchDate("www.drive.com");
            |          |--> function return a promise object. 
            |
            |-->  Store the promise object
 */


/*  
    Q. Will JS wait here for promise to be resolved if it involved any async piece of code?

    If Creation of promise involves sync piece of code it will wait, other wise as it.
 */
function fetchDate(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from",url);
        __________________________________________
        __________________________________________
        __________________________________________
        __________________________________________

        for(let i =0; i < 10000000; i++){}
        resolve("dummy data");
    });
}

/* |
   |--> This callback is having a long sync piece of code, so JS will have to want for promise object creation and just after the for loop, we also resolve the promise so we get a resolved promise.
 */
function fetchDate(url){
    new Promise(function(resolve, reject){
        console.log("Started downloading from",url);
        setTimeout(function processDownloading(){
            let date = "Dummy Data";
            console.log("Download Completed");

            resolve(data);
        }, 7000);
    });
}

/*
    Promise object will get created easily as there is no blocking piece of code, but initially it will be pending. As the fulfillment happens after a time of 7sec.

    Now, technically, where promise gets resolved we have to execute some functions.

    We can use .then() function on the promise object, to band the function as an argument that we want to execute after promise fulfilled, and the argument function takes value properties as parameter.

 */
downloadPromise = fetchDate("www.google.com");
x = downloadPromise.then(function fn(value){
    console.log(value);
    return "Hello World";
});

/*
    The .then function it self returns a new Promise.

    If we are interested only in error we can use null as first argument.

        .then(null, function) & we can use catch : 
        promise.catch(alert)

        promise finally (() = {}) is used to perform general cleanups.
 */