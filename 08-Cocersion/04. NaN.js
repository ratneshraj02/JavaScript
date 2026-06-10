/*  
    NaN -> Not a Number

    It doesn't actually mean not a number rather it gives notion of an invalid number.

    "world" --> toNumber() => NaN

    NaN == NaN => false
    NaN === NaN => true

  NaN is the only primitive value in JS that dones't follow indentity property and is not equal to itself.

  isNaN() - this function has some issue.
  
  this function coerces the argument before checking for NaN. Now string link "abc" to a number it
  becomes NaN & hence isNaN() return.
 */
//e.g :
    console.log(isNaN(0));  //false

    let b = "abc";
    console.log(isNaN(b));  //true

    let c = "world"
    console.log(isNaN(c)); //true
    /*
        function checkdiirection(var) {
        //var will be always a number, and val won't be NaN.

        //tell us whether var is a -ve value or a +ve value.

        if val is -ve return = left
        if val is +ve return = right
        }
     */
