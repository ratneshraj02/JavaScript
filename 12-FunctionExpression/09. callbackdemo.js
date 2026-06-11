/* callback demo */
function fun(x,fn) {
    /*
    
    */
   for(let i = 0; i < x; i++){
    console.log(i);
   }
   fn();
}
fun(10, function log() {
    console.log("Custom log");
});