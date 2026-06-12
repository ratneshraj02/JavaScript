/*
    JavaScript by default only support synchronous code execution.
*/
//e.g:
console.log("Start");
for(let i = 1;i < 10000000000000;i++) {
    //some tasks    
}
console.log("Task done");
console.log("End");
