/* Switch Case */
/*
    What ever value or expression gets calculate, we can use that value & check for the cases.

    syntax : 
        Switch(value or expression){
            case value1:
                //login
                break;
            case value2:
                //login
                break;
            default : 
                //login
        }
        
    break :-
        If we use break within switch case the moment hit break statement we exist out of switch.

        If we don't put break than whatever case we hit, below that everything gets executed till we find break.

        default is not mandatory - 
            If we don't have default and none of the case match we don't do any thing.
*/
let exp = "*";
let a = 10;
let b = 20;

switch(exp) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b );
        break;
    case "%":
        console.log(a % b);
        break;
    default :
        console.log("invalid input");

} 