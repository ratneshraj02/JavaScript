function process(){
    console.log("Start");
    setTimeout(() => {
        console.log("task executed");
    },0);
    for(let i = 0;i < 10000000; i++){
        //some task
    }
    console.log("end");
}

process();

