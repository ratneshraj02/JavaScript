/*
    1. Write a function to download the url.
    2. Write a function to save that the downloaded file and return the filename.
    3. Write a function to upload the file  written in previous step to a new url.
*/

function fetchCustom(url, fn) {
    //
    //
    console.log("Starting downloading from",url);
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    },3000);
}

function writeFile(data, fn){
    setTimeout(function process(){
        console.log("Writing completed");
        let filename = "output.txt";
        fn(filename);
    },4000);
}

function uploadFile(filename, newUrl,fn) {
    console.log("Upload stated");
    setTimeout( function process() {
        console.log("File",filename, "uploaded successfully on",newUrl);
        let uploadResponse = "success";
        fn(uploadResponse);
    },5000);
}

fetchCustom('www.google.com',function downloadCallback(response){
    console.log("Download response is",response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("new written is",filenameResponse);
        uploadFile(filenameResponse,'www.drive.google.com',function uploadCallback(uploadResponse){
            console.log("Successfully upload",uploadResponse);
        })
    })    
});


/* How promises work behind the scene?? */
/*
    The promise object we create has 4 major properties.

    1. status
    2. values
    3. on fulfillment
    4. on reject

    1. status = Status shows current promises status.
        (i). Pending : 
            When we create a new promises object this is the default  state. It represent work in progress.
        (ii). fulfilled : If the operation is completed successfully.
        (iii). Rejected : It the operation is completed not successfully.


    2. values - When status of the promise is "pending", this value property is undefined, the moment promise is resolved status fulfilled the value property is updated from undefined to the new value we can consider as the returned value resolved value.

    [New value we can consider as the returned value] resolved value
    
    so, the value property acts like a placeholder till the time promise finished.

    3. On fulfillment : This is an array, which contains functions that we attach to our promise object. To a promise object we can attach some function using ".then() method".

    When the value property is updated from undefined, to the new value, JS gives chance to these attached function one by one with the value property as there argument (if these is no piece of code in the call stack & global code left).


            Status

            value

            on fulfillment

            [f, g, h ,i]
 */
/*
    return new Promise(function (resolve, reject){
    
    
    });
*/

