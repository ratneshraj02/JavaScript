var teacher = "Sanket";

function fun(){
    var teacher = "Pulkit";
    
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Vibhav";  // eligible for global scope
}

function gun() {
    console.log(subject);

    var subject = "JS"; //formal declaration
    
}

//console.log(teacher);
// fun();
// gun();



// gon();
function gon() {
    console.log("Hello World");
}

var teacher1 = "Sanket";
function hoo() {
    teacher1 = "Pulkit";
    console.log(teacher1);
}

hoo();
console.log(teacher1);

var teacher = "Sanket";

function fun() {
    teacher = "pulkit";
    console.log('HI',teacher);

}
fun();
console.log(teacher);

