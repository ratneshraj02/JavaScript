function fetchData(url) {
    return new Promise( function(resolve, reject) {
        console.log("started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "Dummy Data";
        console.log("Downloading Completed");
        resolve(data);
        }, 7000);
    });    
 }


