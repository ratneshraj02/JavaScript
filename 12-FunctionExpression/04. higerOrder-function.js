/* Higher Order function */

/*
    These are functions that depends & operate on other function.

    Higher order function takes another functions as an argument or return a function and then execute the logic.

    Takes one or multiple function as arguments, return a function.

    e.g :
        function gun(){
        }

        function fun(gun){ // fun - Higher Order function
            ------
            ------
            gun();
        }

    
*/

function multipleGreet(fn, n){
    for(let i = 0; i < n; i++){
        fn();
    };
};

let greet = function(){
    console.log("Hello World");
}

multipleGreet(greet, 2);
console.log("_____________________________________________________");


/* Return a function */
function oddEvenFactory(request) {
    if(request == "odd"){
        return function(){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(){
            console.log(n%2==0);
        }
    }
    else {
        console.log("Wrong request");
    }
}
oddEvenFactory("even");
console.log("_____________________________________________________");

/* Actions that can be performed on an object */
const calculator = {
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul : function(a, b){
        return a*b;
    }
};
/* shorthand */

const _calculator = {
    add(a,b){
        return a+b
    },
    sub(a, b){
        return a-b
    },
    mul(a, b){
        return a*b
    }
};

/* Some already built in Higher Order function */
