/* How JS pares the code */

/*
    We know that Javascript is not interpreted. it definetely is hybrid i.e compiled & interpried. so, whenever we try to execute a JS code, JS first pares the whole code in the parsing phase it assigns scope to variable/function ones done, then it reads the whole code & executes it.
 */

/*
    Every variable in you code will be used in one of the following ways.

    1. Either it will be getting a varless assignmed i.e it is uesd as a target.
        e.g: x = 10

    2. It will be used to retriers a value i.e it will be used as source.
        e.g:
            let y = 10 + x;
            console.log(y); 
*/

/*
    What JS does, it will start parsing phase, outside everything it maintain global scope but the moment it goes inside a function it maintaing scope of that function also.    
 */
//e.g:
    var teacher = "sanket";

    function fun() {
        var teacher = "pulkit";
        console.log(teacher); // pulkit
    }
    fun(); // pulkit
    console.log("___________________________________________________________");

    /*
        Whenever we declare a variable using var, let & const it is a formal declaration or function is also formal declaration initalisting.

                    PHASE - 1                          PHASE - 2
        We will just do scope resolution               Execution
     */

    /*  
        In the parsing phase Javascript looks for formal declaration only, we only allocate scope, not value of the variable. the momement, we go to in a function, the maintain a new scope as will i.e function scope.

        After the parsing Javascipt execute the code
     */
// e.g : 
    var teacher = "sanket";
    function gun() {
        var teacher = "Pulkit";
        teacherAssistant = "Vibhu";
        console.log(teacher); //Pulkit
        console.log(teacherAssistant); //Vibhu
    }

   
    gun(); 
    console.log(teacher); //sanket
    console.log(teacherAssistant);
    console.log("___________________________________________________________");

    