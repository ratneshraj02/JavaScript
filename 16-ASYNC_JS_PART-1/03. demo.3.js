function process() {
    console.log("start");
    setTimeout(() => {
        console.log("Executed some task 1");
    }, 5000);
    setTimeout(() => {
        console.log("Executed some task 2");
    }, 5000);
    console.log("End");
}

process();