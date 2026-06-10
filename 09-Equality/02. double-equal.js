/*
    -> Abstract equlity(==) does coersion if types are not same.
*/

//e.g : 
        console.log(null == undefined); //true
        console.log(undefined == null); //true

        console.log(10 == '10'); //true
        console.log(10 == "12")// false
            /*
                10 is already primitive
                "12" is string then call toString() then call toNumber()
                toNumber("12") -> 12
                10 == 12 => false
            */

        console.log('99' == 99);  //true
        console.log(false == 0);  //true
            /*
                toNumber(false) = 0
                0 == 0 :>  true
            */
        console.log(true == 10); //false
            /*
                toNumber(true) = 1
                1 == 10 = false
             */
        console.log(10 == {valueof(){return 10}});  //true
        /*
            toPrimitive(valueOf() {return 10})
                hint:number -> 10==10 => true 
        */
//e.g : 
        let a = 5;
        if(a) {
            console.log("Hi", "there");  //hi there
        }

        if(a == true) { // 5 == 1 == false
            console.log(`by by`); //this line won't be printed.
        }

        let ans = 0;
        for(let i = 0; i < '23'; i++);{
            ans++;
        }
        console.log(ans) //23

