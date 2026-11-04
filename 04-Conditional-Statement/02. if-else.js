/*
    if(condition1) {
        console.log();
    }
    else {
        console.log();
    }
    
    If condition1 evaluates true, we executed if block code otherwise else block executed.

*/

//e.g :
console.log("Welcome to Prime Video");

let isPrimeMember = true;
if (isPrimeMember) {
    console.log("Enjoy the content");
} else {
    console.log("Please buy the Prime and enjoy the content");
}

/*
    If the condition is true, only if block is execute and else is        completely avoided.

    If the condition is false, only else block is executed and if block is completely avoided.

    NOTE :- If block can exist without the else block but else block will not exist without the if block.

*/