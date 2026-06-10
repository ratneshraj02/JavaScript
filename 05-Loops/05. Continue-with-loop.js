/*
    Continue : Whenever we hit continue we agin move to the nearest loop for execution.
*/
//e.g
for(let i = 0;i < 10;i++) {
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
}