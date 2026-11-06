/* How JS pares the code */

/*
    We know that Javascript is not interpreted. it definitely is hybrid i.e compiled & interpreted. so, whenever we try to execute a JS code, JS first pares the whole code in the parsing phase it assigns scope to variable/function ones done, then it reads the whole code & executes it.
 */

/*
    Every variable in you code will be used in one of the following ways.

    1. Either it will be getting a var less assigned i.e it is used as a target.
        e.g: x = 10

    2. It will be used to retriers a value i.e it will be used as source.
        e.g:
            let y = 10 + x;
            console.log(y); 
*/

/*
    What JS does, it will start parsing phase, outside everything it maintain global scope but the moment it goes inside a function it maintaining scope of that function also.    
 */
//e.g:
var teacher = 'Teacher';

function fun() {
	var teacher = 'Mentor';
	console.log(teacher);
}
fun(); // Mentor
console.log(teacher); //Teacher
console.log('___________________________________________________________');

/*
        Whenever we declare a variable using var, let & const it is a formal declaration or function is also formal declaration initializing.

                    PHASE - 1                          PHASE - 2
        We will just do scope resolution               Execution
     */

/*  
        In the parsing phase Javascript looks for formal declaration only, we only allocate scope, not value of the variable. the moment, we go to in a function, the maintain a new scope as well i.e function scope.

        After the parsing Javascript execute the code
     */
// e.g :
var t1 = "Teacher";
function fun1() {
    var t1 = "Mentor";
    console.log(t1);
}
console.log(t1); //Teacher
fun1(); // Mentor

console.log('___________________________________________________________');

// e.g :
var tt = 'Teacher';
function gun() {
	var tt = 'Teacher';
	ts = 'Assistant';
	console.log(tt); //Teacher
	console.log(ts); //Assistant
}

gun();
console.log(tt); //Teacher
console.log(ts); //Assistant



