//1. Write a fuction to downlaod the url.
//2. write a function to save that the downloaded file and return the filename.
//3. write a function to upload the file  written in previous step to a newurl.

function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Started downloding from",url);
        setTimeout( function processDownloading(){ 
            let data = "Dummy Data";
            console.log("Downlaoding Completed");
            resolve(data)
        },7000);
    });
}

function WriteFile(data){
    return new Promise(function(resolve, reject){
    console.log("Started writting",data,"in a file");
    setTimeout(function processWriting(){
        let filename = "result.txt";
        console.log("File Written SuccessFully");
        resolve(filename);
    },3000);
});
}

function uploadedFile(filename,url){
    return new Promise(function(resolve, reaject){
    console.log("uploading stated on url",url,"filename is",filename);
    setTimeout(function prcessuploading(){
        let result = "completed";
        console.log("Uploading done");
        resolve(result);
    },5000);
});
}


//Call function using async and await keyword

async function processing() {
    let downloadingData = await fetchData("www.google.com");
    console.log("await downlaodingData");
    let writttingData = await WriteFile("rename");
    console.log(" await write file");
    let uploadData = await uploadedFile("rname.txt","www.drive-google.com");
    console.log("await uploading file");

    return true;
}


console.log("Start");
processing();
console.log("End");


