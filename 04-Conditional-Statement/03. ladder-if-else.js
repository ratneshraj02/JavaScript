/*

if(condition-1) { //It condition1 is true only this part executed
    
}
else if(condition-2) { // If condition2 is true only this part executed
   
}
else { // If above condition are false then this part is executed

}
*/

let isUserPremium = false;
let isUserVip = false;

if (isUserPremium) {
    console.log("Enjoy the Premium content on Onstart");
} else if (isUserVip) {
    console.log("Enjoy the VIP content for more subscribe to Premium");
} else {
    console.log("Please Purchase either VIP or Premium subscription to enjoy the content on onStart");
}

/*
    If multiple conditions are true, then the block where first true condition is written will be executed.

    If can exist without else if & else.
    else cannot exist without if but can exist without else if.
    else if cannot exist without if , but can exist without else.
*/