
for(var i = 0; i < 4; i++){
    setTimeout(() => {
        console.log("HI");
    }, i*1000);
};


/* Call - console.log(" ") 
            |
            |-> process.stdout.write
*/
