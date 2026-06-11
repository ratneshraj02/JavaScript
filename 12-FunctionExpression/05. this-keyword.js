/* this keyword */

/*
    this keyword refers to an object that is ececuting the current piece of code.
 */

    function str(){
        console.log(this);
    }
    str();
/*
    Also write this for calling function 
                                        1. str();
                                        2. window.str();
 */

/* e.g */
    const student = {
        name: "Ratnesh",
        age: 20,
        eng: 96,
        math: 93,
        phy: 97,
        getAvg(){
            return ((this.eng + this.math + this.phy)/3);
        }
    };

    console.log(student.getAvg());