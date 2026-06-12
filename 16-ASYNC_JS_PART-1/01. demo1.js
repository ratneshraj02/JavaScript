function process(){
    console.log("Start");
    setTimeout(function (){
        console.log("task executed");
    },5000);
    for(let i = 1; i < 100000; i++){
        //some task
    }
    console.log("End");
}


process();