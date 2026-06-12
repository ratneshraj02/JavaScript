function fetchData(url) {
    return new Promise( function(resolve, reject) {
        console.log("started downloading from", url);
        setTimeout(function processDownloading(){
            let data = "Dummy Data";
        console.log("Downloading Completed");
        resolve(data);
        }, 70000);
    });    
 }

 async function processing() {
    console.log("Entering in the  async function");
    let value1 = await fetchData('www.youtube.com');
    console.log("youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading done");
    return value1 + value2;
 }

console.log('Start');
setTimeout(function (){ console.log("Timer-1") },0);
console.log("after setting timer-1");
let x=processing();
x.then( function (value){
    console.log('finally  processing promise resolve with',value);
});
setTimeout(function (){ console.log("Timer-2") },1000);
setTimeout(function (){ console.log("Timer-3") },0);
console.log("End");