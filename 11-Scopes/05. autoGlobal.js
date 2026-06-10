var teacher = "Sanket";
function fun() {
    console.log(subject); // Undefined
    var teacher = "Pulkit";
    var subject = "JS";
    teachingAssistant = "Vibhu";
    console.log(teacher); //Pulkit
    console.log(teachingAssistant); //Vibhu "Auto Global"
}

console.log(teacher); //Sanket
fun();
console.log(teachingAssistant); //Vibhu
console.log("_______________________________________________________________");

/* Auto Global */

/*  
    In JS if we keep on realy scope of a variable in outer scopes & no where find, it we automatically consider it in global scope. this happens during execution phases, Auot Global only works with target reference & not source.

*/

/* e.g :  */
var _teacher = "Sanket";
function gun() {
    var _teacher = "Pulkit";
    console.log(_teacher, _teachingAssistant);//Pulkit, variable is not defined
    _teachingAssistant = "Vibhu";
}
function hun(){
    console.log(_subject); //Undefined
    var _subject = "JS";
    console.log(_teacher); //Sanket
}
console.log(teacher); //Sanket
// gun(); //In this case where teachingAssistant is undeclared.

console.log(teacher); //Sanket
hun(); // undefined, Sanket
console.log("_______________________________________________________________");

/*  
    In parsing phase formal declaration made buket name with subject, when we print the value is undefined because JS assign value of variable in execution phase. 
    
    "undefined" is variable state when the scopes already known about it but in the execuation phase we have not allocated it a value.

    "undeclared" is variable state when we never formally decleared and before assigning it a value so that it has chance to becomes autoglobal, we try to use it.

 */

/* e.g */
function _fun(){
    __teachingAssistant = "Vibhav";
    console.log(__teachingAssistant); //Vibhav
    var _teachingAssistant = "JD";
}
_fun();
