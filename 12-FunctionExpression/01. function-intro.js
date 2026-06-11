/*
        ____________________________
        |  function name>(args){   | 
        |       imp                | --> function defination
        |    }                     |
        |                          |
        |  var f = function(args){ | --------
        |        imp               | 
        |   }                      |  function expression       
        |                          |          
        |   (function () {})       | --------
        |                          |
        |                          |
        |                          |
        |__________________________|

 */

/*
    In Javascript, we can pass function as an argument to another function.
 */

/* e.g */
function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("Inside gun");
    fun();

    console.log("leaving gun");
}

gun(function (){
    console.log("new function passed");
});

gun(fun);

/* 
    function expression are of two types: 
                                            1. Anonymous function
                                            2. Named function
 */