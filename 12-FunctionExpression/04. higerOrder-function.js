/* Higher Order function */

/*
    Takes one or multiple function as arguments, return a function.
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
            consoele.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(){
            consoele.log(n%2==0);
        }
    }
    else {
        console.log("Wrong request");
    }
}
oddEvenFactory("even");
console.log("_____________________________________________________");

/* Actions that can be performed on an object */
const calcuator = {
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
