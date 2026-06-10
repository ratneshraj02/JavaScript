/* Strict Mode */


function fun() {
    ta = "vibhav";
    console.log(ta); //vibhav
}

"use strict"
function gun() {
    teacher = "sanket";
    console.log(teacher); //sanket
}

fun();
gun();

/*  
    In strict mode auto global are Prohibited.
 */
"use strict"
function hun() {
    _teachingAssistant = "JD";
    console.log(_teachingAssistant); // JD
}
hun();


function _hun() {
    "use strict"
    teachingAssistant = "JD";
    console.log(teachingAssistant); // Error
}
_hun();
